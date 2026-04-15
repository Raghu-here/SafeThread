import crypto from "crypto";

export const calculateMemoryHash = (userId, content, submittedAt) => {
  const data = `${userId}:${content}:${submittedAt.toISOString()}`;
  return crypto.createHash("sha256").update(data).digest("hex");
};