const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag,
} = require("../controllers/tagRoutes");

// Public routes
router.get("/", getAllTags);
router.get("/:id", getTagById);

// Protected routes (admin only)
router.post("/", auth, createTag);
router.put("/:id", auth, updateTag);
router.delete("/:id", auth, deleteTag);

module.exports = router;
