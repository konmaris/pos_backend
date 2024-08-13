const express = require("express");
const router = express.Router();

const getDeliveryBoys = require("./getDeliveryBoys");
const updateShift = require("./updateShift");
const getDeliveryBoy = require("./getDeliveryBoy");

router.get("/", getDeliveryBoys);
router.get("/:id", getDeliveryBoy);
router.put("/updateShift", updateShift);

module.exports = router;
