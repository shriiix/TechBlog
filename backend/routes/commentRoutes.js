import express from "express";
import auth from "../middlewares/authMiddleware.js";
import {
  createComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

// Public route
router.get("/post/:postId", getCommentsByPost);

// Protected routes
router.post("/post/:postId", auth, createComment);
router.put("/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);

export default router;
