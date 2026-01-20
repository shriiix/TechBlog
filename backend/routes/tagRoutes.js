import express from "express";
import auth from "../middlewares/authMiddleware.js";
import {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag,
} from "../controllers/tagController.js";

const router = express.Router();

// Public routes
router.get("/", getAllTags);
router.get("/:id", getTagById);

// Protected routes (admin only)
router.post("/", auth, createTag);
router.put("/:id", auth, updateTag);
router.delete("/:id", auth, deleteTag);

export default router;
