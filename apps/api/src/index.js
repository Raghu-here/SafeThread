import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import memoryRoutes from './routes/memory.routes.js';
import timelineRoutes from './routes/timeline.routes.js';
import storageRoutes from './routes/storage.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

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