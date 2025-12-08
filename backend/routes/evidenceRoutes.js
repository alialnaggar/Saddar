// routes/evidenceRoutes.js
const express = require("express");
const router = express.Router();
const Evidence = require("../models/Evidence");

// Create evidence
router.post("/", async (req, res) => {
  try {
    const { userId, type, fileUrl, meta } = req.body;
    const ev = await Evidence.create({ userId, type, fileUrl, meta });
    return res.status(201).json(ev);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Read all evidence
router.get("/", async (req, res) => {
  try {
    const list = await Evidence.find().populate("userId", "username region productType");
    return res.json(list);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Read evidence by id
router.get("/:id", async (req, res) => {
  try {
    const e = await Evidence.findById(req.params.id).populate("userId", "username");
    if (!e) return res.status(404).json({ message: "Not found" });
    return res.json(e);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;