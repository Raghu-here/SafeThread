
import prisma from '../lib/prisma.js';


export const uploadAudio = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No audio file provided." });
    }

    const { memoryCardId } = req.body;

    const attachment = await prisma.memoryAttachment.create({
      data: {
        memoryCardId,
        type: file.mimetype,
        url: file.location // S3/R2 URL
      }
    });

    res.status(201).json({
      message: "Audio memory preserved.",
      attachment
    });
  } catch (error) {
    res.status(500).json({ message: "We couldn't preserve the audio right now." });
  }
};