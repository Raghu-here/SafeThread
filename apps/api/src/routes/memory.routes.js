import { Router } from "express";
import { createMemory, getMemories } from '../controllers/memory.controller.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.use(authGuard);

router.post("/", createMemory);
router.get("/", getMemories);

export default router;