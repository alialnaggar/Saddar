const mongoose = require('mongoose');

const EvidenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["photo", "receipt", "review"], required: true },
  fileUrl: String,
  notes: String,
  meta: Object,
  verified: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Evidence', EvidenceSchema);
