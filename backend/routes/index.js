import express from "express";
import authRoutes from "./authRoutes.js";
import postRoutes from "./postRoutes.js";
import commentRoutes from "./commentRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import tagRoutes from "./tagRoutes.js";

const router = express.Router();

// Import and mount resource routers
router.use("/auth", authRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/categories", categoryRoutes);
router.use("/tags", tagRoutes);

export default router;
