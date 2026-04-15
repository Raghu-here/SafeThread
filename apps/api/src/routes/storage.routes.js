import { Router } from "express";
import { uploadAudio } from '../controllers/storage.controller.js';
import { upload } from '../lib/storage.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.use(authGuard);

router.post("/audio", upload.single("audio"), uploadAudio);

export default router;