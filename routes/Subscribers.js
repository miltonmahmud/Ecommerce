const express = require("express");
const {
  createSubscriber,
  deleteSubscriber,
  getSubscribers,
} = require("../controllers/Subscriber.js");

const router = express.Router();

router.post("/", createSubscriber);
router.delete("/:id", deleteSubscriber);
router.get("/", getSubscribers);

module.exports = router;
