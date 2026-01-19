const express = require("express");
const router = express.Router();

// Import and mount resource routers
router.use("/auth", require("./authRoutes"));
router.use("/posts", require("./postRoutes"));
router.use("/comments", require("./commentRoutes"));
router.use("/categories", require("./categoryRoutes"));
router.use("/tags", require("./tagRoutes"));

module.exports = router;
