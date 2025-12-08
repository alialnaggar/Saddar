const mongoose = require("mongoose");

const EvidenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { 
    type: String, 
    enum: ["photo", "receipt", "review", "shipment", "other"], 
    required: true 
  },
  fileUrl: { type: String },
  meta: { type: Object },
  verified: { type: Boolean, default: false },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Evidence", EvidenceSchema);