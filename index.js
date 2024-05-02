const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const stripePackage = require("stripe");
const productsRoute = require("./routes/Products.js");
const categoriesRoute = require("./routes/Categories.js");
const couponsRoute = require("./routes/Coupons.js");
const slidersRoute = require("./routes/Sliders.js");
const attributesRoute = require("./routes/Attributes.js");
const collectionsRoute = require("./routes/Collections.js");
const bannersRoute = require("./routes/Banners.js");
const labelsRoute = require("./routes/Labels.js");
const popupsRoute = require("./routes/Popups.js");
const subscribersRoute = require("./routes/Subscribers.js");
const customersRoute = require("./routes/Customers.js");
const messagesRoute = require("./routes/Messages.js");
const HomeCategoriessRoute = require("./routes/HomeCategories.js");
const SalesettingsRoute = require("./routes/SaleSettings.js");
const ServicesRoute = require("./routes/Services.js");
const TopLeftBannersRoute = require("./routes/TopLeftBanners.js");
const ShopPageBannersRoute = require("./routes/ShopPageBanners.js");
const TopRightBannersRoute = require("./routes/TopRightBanners.js");
const HomeSecondBannersRoute = require("./routes/HomeSecondBanners.js");
const orderRoutes = require("./routes/orderRoutes.js");
const settingsRoutes = require("./routes/settingsRoutes.js");
const aboutRoutes = require("./routes/aboutRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

const stripe = stripePackage(
  "sk_test_51Koh6SH4bRqxW4bXn4DfAYffK7ZemO0RyGZLLYFiodeeHFvEGXSWuplJT3qXuhBYNnfL4gWOktqNT7NuEG2ia5g300lx56XWje"
);

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/api/products", productsRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/coupons", couponsRoute);
app.use("/api/sliders", slidersRoute);
app.use("/api/attributes", attributesRoute);
app.use("/api/collections", collectionsRoute);
app.use("/api/banners", bannersRoute);
app.use("/api/labels", labelsRoute);
app.use("/api/popups", popupsRoute);
app.use("/api/subscribers", subscribersRoute);
app.use("/api/customers", customersRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/HomeCategories", HomeCategoriessRoute);
app.use("/api/saleSettings", SalesettingsRoute);
app.use("/api/services", ServicesRoute);
app.use("/api/top-left-banners", TopLeftBannersRoute);
app.use("/api/shop-page-banners", ShopPageBannersRoute);
app.use("/api/top-right-banners", TopRightBannersRoute);
app.use("/api/home-second-banners", HomeSecondBannersRoute);
app.use("/api/orders", orderRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/auth", authRoutes);

// Create a Checkout Session endpoint
app.post("/api/stripe/pay", async (req, res) => {
  try {
    const { products } = req.body;

    // Check if products array exists and is not empty
    if (!Array.isArray(products) || products.length === 0) {
      throw new Error("Products array is missing or empty");
    }

    const lineItems = products.map((product) => {
      const price = product.sale_price || product.regular_price || 0;

      // Check if price is a valid number
      const unitAmount =
        typeof price === "number" ? Math.round(price * 100) : 0;

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount: unitAmount,
        },
        quantity: product.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// MongoDB Connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Connected to the backend. Listening on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});
