const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategories,
  getSubcategories,
} = require("../controllers/Category.js");

const router = express.Router();

router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/find/:id", getCategory);
router.get("/", getCategories);
router.get("/:id/subcategories", getSubcategories);

module.exports = router;
