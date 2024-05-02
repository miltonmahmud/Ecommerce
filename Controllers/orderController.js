const Order = require("../models/Order");

const createOrder = async (req, res, next) => {
  try {
    const {
      billingInfo,
      shippingInfo,
      items,
      paymentMethod,
      couponCode,
      totalPrice,
    } = req.body;

    // Check if items array is present and each item has a productId
    if (
      !Array.isArray(items) ||
      items.length === 0 ||
      !items.every((item) => item.productId)
    ) {
      return res.status(400).json({ error: "Invalid items data" });
    }

    const newOrder = new Order({
      billingInfo,
      shippingInfo,
      items,
      paymentMethod,
      totalPrice,
      couponCode,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const updates = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, {
      new: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "Order deleted successfully", order: deletedOrder });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
