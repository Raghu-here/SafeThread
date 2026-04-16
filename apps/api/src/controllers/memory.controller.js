
import prisma from '../lib/prisma.js';
import { CreateMemoryCardSchema } from "@safethread/shared";

import { calculateMemoryHash } from '../lib/crypto.js';

export const createMemory = async (req, res) => {
  try {
    const validatedData = CreateMemoryCardSchema.parse(req.body);
    const audioData = req.body.audioData || null;   // stored outside validated schema
    const userId = req.user.userId;
    const submittedAt = new Date();

    const hash = calculateMemoryHash(userId, validatedData.content, submittedAt);

    let transcript = null;
    if (audioData && process.env.OPENAI_API_KEY) {
      try {
        const base64Clean = audioData.replace(/^data:audio\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Clean, "base64");
        const blob = new Blob([buffer], { type: "audio/webm" });
        const formData = new FormData();
        formData.append("file", blob, "audio.webm");
        formData.append("model", "whisper-1");

        const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
          body: formData
        });
        
        if (response.ok) {
          const result = await response.json();
          transcript = result.text;
        }
      } catch (err) {
        console.error("OpenAI Whisper API error:", err);
      }
    }

    const memory = await prisma.$transaction(async (tx) => {
      // If this is a correction, mark original as superseded
      if (validatedData.supersedesId) {
        await tx.memoryCard.update({
          where: { id: validatedData.supersedesId },
          data: { isSuperseded: true }
        });
      }

      const created = await tx.memoryCard.create({
        data: {
          userId,
          content: validatedData.content,
          eventDate: validatedData.eventDate,
          eventTime: validatedData.eventTime,
          dateConfidence: validatedData.dateConfidence,
          submittedAt,
          supersedesId: validatedData.supersedesId,
          hash,
          audioData,
          transcript,
          tags: {
            create: validatedData.tags?.map((tagName) => ({
              tag: {
                connectOrCreate: {
                  where: { name: tagName },
                  create: { name: tagName, type: "user" }
                }
              }
            }))
          }
        },
        include: {
          tags: { include: { tag: true } }
        }
      });

      await tx.auditLog.create({
        data: {
          userId,
          action: "CREATE_MEMORY",
          entityId: created.id,
          metadata: JSON.stringify({ hash })
        }
      });

      return created;
    });

    res.status(201).json({
      message: "Memory saved. It is safe here.",
      memory
    });
  } catch (error) {
    console.error('Memory save error:', error);
    res.status(400).json({ message: "We weren't able to save that memory right now. Please take a moment and try again — your words are safe with us." });
  }
};

export const getMemories = async (req, res) => {
  try {
    const userId = req.user.userId;
    const memories = await prisma.memoryCard.findMany({
      where: { userId },
      include: {
        tags: { include: { tag: true } },
        attachments: true
      },
      orderBy: { submittedAt: "desc" }
    });

    res.json(memories);
  } catch (error) {
    console.error('Memory fetch error:', error);
    res.status(500).json({ message: "We're having a little trouble reaching your memories. Please try refreshing — everything you've stored is safe." });
  }
};