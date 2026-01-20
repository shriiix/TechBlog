import express from "express";
import auth from "../middlewares/authMiddleware.js";
import {
  createPost,
  listPosts,
  getPostBySlug,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postController.js";

const router = express.Router();

// Public routes
router.get("/", listPosts);
router.get("/:slug", getPostBySlug);

// Protected routes
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.post("/:id/like", auth, likePost);

export default router;
