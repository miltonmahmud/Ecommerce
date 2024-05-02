const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
} = require("../controllers/Product.js");

const router = express.Router();

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/find/:id", getProduct);
router.get("/", getProducts);

module.exports = router;
