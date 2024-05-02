const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    billingInfo: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      companyName: String,
      country: String,
      address: {
        type: String,
        required: true,
      },
      address2: String,
      city: String,
      state: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    shippingInfo: {
      firstName: String,
      lastName: String,
      companyName: String,
      country: String,
      address: String,
      address2: String,
      city: String,
      state: String,
      zipcode: String,
      phone: String,
      email: String,
    },
    orderNotes: String,
    items: {
      type: [itemSchema],
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["CARD", "COD"],
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    couponCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
