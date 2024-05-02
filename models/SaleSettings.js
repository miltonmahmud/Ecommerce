const mongoose = require("mongoose");

const SaleSettingsSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["active", "inactive"], // Valid enum values
      default: "active", // Default value
    },
    expiry_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SaleSettings", SaleSettingsSchema);
