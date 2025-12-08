// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");
const evidenceRoutes = require("./routes/evidenceRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Test Route
app.get("/", (req, res) => {
  res.send("SADDAR API running...");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/evidence", evidenceRoutes);
app.use("/api/orders", orderRoutes);

// Error handling (recommended for milestone)
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);
  res.status(500).json({ error: "Server Error", details: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✔ Server running on port ${PORT}`);
});