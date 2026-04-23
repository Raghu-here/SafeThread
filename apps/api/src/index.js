import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import memoryRoutes from './routes/memory.routes.js';
import timelineRoutes from './routes/timeline.routes.js';
import storageRoutes from './routes/storage.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 15 });
app.use("/api/auth", authLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/memories", memoryRoutes);
app.use("/api/timeline", timelineRoutes);
app.use("/api/storage", storageRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`[server]: SafeThread API is running at http://localhost:${port}`);
});