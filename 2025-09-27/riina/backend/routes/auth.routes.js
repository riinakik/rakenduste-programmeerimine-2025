const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");

// POST /auth/login
router.post("/login", authController.login);

// GET /auth/ping
router.get("/ping", authController.ping);

module.exports = router;
