// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/users - Create new user
router.post("/", async (req, res) => {
  try {
    const { name, regNo, dob, email, telegramId } = req.body;

    // optional: check for duplicate register number
    const existing = await User.findOne({ regNo });
    if (existing) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await User.create({ name, regNo, dob, email, telegramId });
    res.status(201).json({ message: "✅ User registered", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users - Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
