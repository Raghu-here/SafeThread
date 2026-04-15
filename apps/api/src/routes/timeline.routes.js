import { Router } from "express";
import { getTimeline, exportTimelinePDF } from '../controllers/timeline.controller.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.use(authGuard);

router.get("/", getTimeline);
router.get("/export", exportTimelinePDF);

export default router;