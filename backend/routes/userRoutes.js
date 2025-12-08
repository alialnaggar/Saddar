// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create user
router.post("/", async (req, res) => {
  try {
    const { username, email, password, role, region, productType } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const user = await User.create({ username, email, password, role, region, productType });
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Read all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Read one user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Update user
router.put("/:id", async (req, res) => {
  try {
    const data = req.body;
    if (data.email) {
      const other = await User.findOne({ email: data.email, _id: { $ne: req.params.id } });
      if (other) return res.status(400).json({ message: "Email already used" });
    }
    const updated = await User.findByIdAndUpdate(req.params.id, data, { new: true }).select("-password");
    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: "User deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;