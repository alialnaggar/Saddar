// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");

// Create order
router.post("/", async (req, res) => {
  try {
    const { buyerId, exporterId, amount } = req.body;
    // basic validation
    if (!buyerId || !exporterId || !amount) return res.status(400).json({ message: "Missing fields" });
    if (amount > 1000) return res.status(400).json({ message: "Amount exceeds micro-order limit" });

    // optional: confirm user exists
    const buyer = await User.findById(buyerId);
    const exporter = await User.findById(exporterId);
    if (!buyer || !exporter) return res.status(400).json({ message: "Buyer or exporter not found" });

    const order = await Order.create({ buyerId, exporterId, amount });
    return res.status(201).json(order);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("buyerId exporterId", "username region productType");
    return res.json(orders);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Get one order
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("buyerId exporterId", "username");
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.json(order);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Update order
router.put("/:id", async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Delete order
router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.json({ message: "Order deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;