
import prisma from '../lib/prisma.js';
import { CreateMemoryCardSchema } from "@safethread/shared";

import { calculateMemoryHash } from '../lib/crypto.js';
import { uploadBufferToS3 } from '../lib/storage.js';

export const createMemory = async (req, res) => {
  try {
    const validatedData = CreateMemoryCardSchema.parse(req.body);
    const audioData = req.body.audioData || null;
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

    // Upload audio to S3 if provided
    let audioUrl = null;
    if (audioData) {
      try {
        const base64Clean = audioData.replace(/^data:audio\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Clean, "base64");
        const key = `memories/${userId}/${Date.now()}-audio.webm`;
        audioUrl = await uploadBufferToS3(buffer, key, "audio/webm");
      } catch (err) {
        console.error("S3 audio upload error:", err);
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

      // Create MemoryAttachment for the audio URL
      if (audioUrl) {
        await tx.memoryAttachment.create({
          data: {
            memoryCardId: created.id,
            type: "audio",
            url: audioUrl,
            transcript,
          }
        });
      }

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
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
    const skip = (page - 1) * limit;

    const [memories, total] = await Promise.all([
      prisma.memoryCard.findMany({
        where: { userId },
        include: {
          tags: { include: { tag: true } },
          attachments: true
        },
        orderBy: { submittedAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.memoryCard.count({ where: { userId } }),
    ]);

    res.json({ data: memories, total, page, limit });
  } catch (error) {
    console.error('Memory fetch error:', error);
    res.status(500).json({ message: "We're having a little trouble reaching your memories. Please try refreshing — everything you've stored is safe." });
  }
};