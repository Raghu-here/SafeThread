import { Router } from "express";
import { register, login, refresh, logout, changePassword, deleteAccount, updateProfile } from '../controllers/auth.controller.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/change-password", authGuard, changePassword);
router.patch("/update-profile", authGuard, updateProfile);
router.delete("/account", authGuard, deleteAccount);

export default router;