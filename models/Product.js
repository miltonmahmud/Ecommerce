const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    regular_price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: [String],
      required: true,
    },
    gallery: {
      type: [String], // Assuming URLs of images will be stored as strings
    },
    sku: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    stock: {
      type: String,
      enum: ["in_stock", "out_of_stock"],
      required: true,
    },
    featured: {
      type: String,
      enum: ["yes", "no"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
    },
    tag: {
      type: String,
    },
    product_collection: {
      type: String,
    },
    colors: {
      type: [String],
    },
    sizes: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
