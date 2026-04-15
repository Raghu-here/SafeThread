import bcrypt from "bcryptjs";
import prisma from '../lib/prisma.js';
import { generateToken, generateRefreshToken, verifyRefreshToken } from '../lib/auth.js';
import { z } from 'zod';

const LocalLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const LocalRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
});

export const register = async (req, res) => {
  try {
    console.log('[Register] Incoming Body:', req.body);
    const validatedData = LocalRegisterSchema.parse(req.body);
    console.log('[Register] Validated Data:', validatedData);

    if (!validatedData.email) throw new Error("Email is required for findUnique");

    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });

    if (existingUser) {
      return res.status(400).json({ message: "This email is already in our care." });
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 12);

    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        name: validatedData.name
      }
    });

    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });

    res.status(201).json({
      message: "Welcome. Your space is ready.",
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email, name: user.name }
    });
  } catch (error) {
    console.error('[Register] Critical Error:', error);
    if (error.code) console.error('[Register] Prisma Error Code:', error.code);
    res.status(400).json({ 
      message: error.message || "We had trouble creating your space.",
      debug: error.code || 'VALIDATION_ERROR' 
    });
  }
};

export const login = async (req, res) => {
  try {
    console.log('[Login] Incoming Body:', req.body);
    const validatedData = LocalLoginSchema.parse(req.body);
    console.log('[Login] Validated Data:', validatedData);

    if (!validatedData.email) throw new Error("Email is required for findUnique");

    const user = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });

    if (!user || !(await bcrypt.compare(validatedData.password, user.password))) {
      return res.status(401).json({ message: "The details don't quite match. Try again?" });
    }

    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });

    res.json({
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email, name: user.name }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(400).json({ message: "We had trouble signing you in. Please take a breath and try again." });
  }
};

export const refresh = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided." });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken }
    });

    if (!storedToken || storedToken.expiresAt < new Date()) {
      return res.status(401).json({ message: "Refresh token is invalid or expired." });
    }

    // Refresh token rotation
    await prisma.refreshToken.delete({ where: { token: refreshToken } });

    const newAccessToken = generateToken(decoded.userId);
    const newRefreshToken = generateRefreshToken(decoded.userId);

    await prisma.refreshToken.create({
      data: {
        token: newRefreshToken,
        userId: decoded.userId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });

    res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (error) {
    res.status(401).json({ message: "Session expired." });
  }
};

export const logout = async (req, res) => {
  const { refreshToken } = req.body;
  if (refreshToken) {
    await prisma.refreshToken.deleteMany({ where: { token: refreshToken } });
  }
  res.json({ message: "Logged out. Wishing you peace." });
};

export const changePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters." });
    }
    const hashed = await bcrypt.hash(newPassword, 12);
    await prisma.user.update({
      where: { id: req.user.userId },
      data: { password: hashed }
    });
    res.json({ message: "Password changed successfully." });
  } catch (_) {
    res.status(500).json({ message: "Could not update password." });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.userId;
    // Delete in correct dependency order
    await prisma.refreshToken.deleteMany({ where: { userId } });
    await prisma.auditLog.deleteMany({ where: { userId } });
    const memories = await prisma.memoryCard.findMany({ where: { userId }, select: { id: true } });
    for (const m of memories) {
      await prisma.memoryCardTag.deleteMany({ where: { memoryCardId: m.id } });
      await prisma.memoryAttachment.deleteMany({ where: { memoryCardId: m.id } });
    }
    await prisma.memoryCard.deleteMany({ where: { userId } });
    await prisma.user.delete({ where: { id: userId } });
    res.json({ message: "Account terminated. Be safe." });
  } catch (err) {
    res.status(500).json({ message: "Could not delete account." });
  }
};