const express = require("express");
const router = express.Router();

const getDeliveryBoys = require("./getDeliveryBoys");
const updateShift = require("./updateShift");
const getDeliveryBoy = require("./getDeliveryBoy");
const updateShiftCashForChange = require("./updateShiftCashForChange");

router.get("/", getDeliveryBoys);
router.get("/:id", getDeliveryBoy);
router.put("/updateShift", updateShift);
router.put("/updateShiftCashForChange", updateShiftCashForChange);

module.exports = router;
