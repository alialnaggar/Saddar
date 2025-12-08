const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exporterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true, max: 1000 },
  status: { 
    type: String, 
    enum: ["pending", "shipped", "delivered", "released"], 
    default: "pending" 
  },
  escrowStatus: { 
    type: String, 
    enum: ["held", "released"], 
    default: "held" 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);