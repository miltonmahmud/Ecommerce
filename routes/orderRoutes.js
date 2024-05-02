const express = require("express");
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController.js");

const router = express.Router();

// Route to create a new order
router.post("/", createOrder);

// Route to fetch all orders
router.get("/", getAllOrders);

// Route to fetch a single order by ID
router.get("/:id", getOrderById);

// Route to update an existing order
router.put("/:id", updateOrder);

// Route to delete an order
router.delete("/:id", deleteOrder);

module.exports = router;
