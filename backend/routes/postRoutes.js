const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  createPost,
  listPosts,
  getPostBySlug,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/postController");

// Public routes
router.get("/", listPosts);
router.get("/:slug", getPostBySlug);

// Protected routes
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.post("/:id/like", auth, likePost);

module.exports = router;
