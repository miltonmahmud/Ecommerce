const SaleSettings = require("../models/SaleSettings");

// Controller function to update sale settings
const updateSaleSettings = async (req, res) => {
  try {
    // Find the existing sale settings document
    let saleSettings = await SaleSettings.findOne();

    if (!saleSettings) {
      // If no sale settings document exists, create a new one
      saleSettings = new SaleSettings(req.body);
    } else {
      // If sale settings document exists, update it
      saleSettings.status = req.body.status;
      saleSettings.expiry_date = req.body.expiry_date;
    }

    // Save the updated or newly created sale settings document
    const updatedSaleSettings = await saleSettings.save();
    res.status(200).json(updatedSaleSettings);
  } catch (error) {
    console.error("Error updating sale settings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function to get sale settings
const getSaleSettings = async (req, res) => {
  try {
    const saleSettings = await SaleSettings.findOne();
    if (!saleSettings) {
      return res.status(404).json({ message: "Sale settings not found" });
    }
    res.status(200).json(saleSettings);
  } catch (error) {
    console.error("Error getting sale settings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  updateSaleSettings,
  getSaleSettings,
};
