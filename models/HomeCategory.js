const mongoose = require("mongoose");
const HomeCategorySchema = new mongoose.Schema(
  {
    categories: {
      type: [],
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeCategory", HomeCategorySchema);
