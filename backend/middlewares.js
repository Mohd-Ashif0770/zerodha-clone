const jwt = require("jsonwebtoken");
require("dotenv").config();

// Verifies JWT token from cookie or Authorization header
const verifyAuth = (req, res, next) => {
  try {
    // Try cookie first (cookie-parser must be used in server)
    const token =
      req.cookies?.token ||
      (req.headers.authorization
        ? req.headers.authorization.split(" ")[1]
        : null);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    // attach useful info to request
    req.userId = decoded.userId || decoded.id || null;
    next();
  } catch (err) {
    console.error("Auth verification failed:", err.message);
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = { verifyAuth };
