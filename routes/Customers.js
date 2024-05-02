const express = require("express");
const {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
} = require("../controllers/Customer.js");

const router = express.Router();

router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
router.get("/find/:id", getCustomer);
router.get("/", getCustomers);

module.exports = router;
