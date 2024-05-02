const express = require("express");
const {
  createMessage,
  updateMessage,
  deleteMessage,
  getMessage,
  getMessages,
} = require("../controllers/Message.js");

const router = express.Router();

router.post("/", createMessage);
router.put("/:id", updateMessage);
router.delete("/:id", deleteMessage);
router.get("/find/:id", getMessage);
router.get("/", getMessages);

module.exports = router;
