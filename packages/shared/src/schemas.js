import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().optional(),
  createdAt: z.date()
});

export const MemoryCardSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  content: z.string().min(1, "Memory content is required"),
  // Accept both ISO date strings and Date objects
  eventDate: z.union([z.string(), z.date()]).optional().nullable(),
  eventTime: z.string().optional().nullable(),
  // Accept the enum values OR any string (since SQLite dropped the enum)
  dateConfidence: z.string().default("APPROXIMATE"),
  submittedAt: z.date(),
  isSuperseded: z.boolean().default(false),
  supersedesId: z.string().uuid().optional().nullable(),
  hash: z.string()
});

export const TagSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: z.string()
});

export const CreateMemoryCardSchema = MemoryCardSchema.omit({
  id: true,
  userId: true,
  submittedAt: true,
  isSuperseded: true,
  hash: true
}).extend({
  tags: z.array(z.string()).optional(),
  // audioData excluded from validation — handled separately in controller
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional()
});