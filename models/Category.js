const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subcategoryId: {
    type: String,
    ref: "Category",
  },
});

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subcategories: [SubcategorySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
