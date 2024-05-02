const express = require("express");
const {
  createService,
  updateService,
  deleteService,
  getService,
  getServices,
} = require("../controllers/Service.js");

const router = express.Router();

router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);
router.get("/find/:id", getService);
router.get("/", getServices);

module.exports = router;
