const { verifyToken } = require("../utils/jwt");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from Authorization header (Bearer <token>)
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access token required",
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const payload = verifyToken(token);
    req.user = payload; // { userId, role }

    next();
  } catch (err) {
    res.status(403).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;
