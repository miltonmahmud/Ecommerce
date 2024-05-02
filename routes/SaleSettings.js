const express = require("express");
const {
  updateSaleSettings,
  getSaleSettings,
} = require("../controllers/SaleSettings.js");

const router = express.Router();

// Route to update sale settings
router.put("/", updateSaleSettings);

// Route to get sale settings (optional, if needed)
router.get("/", getSaleSettings);

module.exports = router;
