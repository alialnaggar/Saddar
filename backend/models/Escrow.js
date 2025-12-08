import mongoose from "mongoose";

const EscrowSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  amount: Number,
  status: { type: String, enum: ["held", "released"], default: "held" }
}, { timestamps: true });

export default mongoose.model("Escrow", EscrowSchema);