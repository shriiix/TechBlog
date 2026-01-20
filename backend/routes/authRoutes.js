import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes (add auth middleware later)
router.post("/logout", logout);

export default router;
