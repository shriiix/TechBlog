const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  createComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

// Public route
router.get("/post/:postId", getCommentsByPost);

// Protected routes
router.post("/post/:postId", auth, createComment);
router.put("/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);

module.exports = router;
