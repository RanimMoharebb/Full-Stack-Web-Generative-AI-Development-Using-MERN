const express = require("express");

const router = express.Router();

const apiKeyMiddleware = require("../middleware/apiKeyMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const {
  createLog,
  getLogs,
} = require("../controllers/logController");

// Public route (apps send logs here)
router.post("/", apiKeyMiddleware, createLog);

// Dashboard route (protected)
router.get("/", authMiddleware, getLogs);

module.exports = router;