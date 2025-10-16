const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../controllers/userController");
const { verifyAuth } = require("../middlewares");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Verify authentication (used by frontends to check session)
router.get("/verify", verifyAuth, (req, res) => {
  return res.status(200).json({ message: "Authenticated", userId: req.userId });
});

module.exports = router;
