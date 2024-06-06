const express = require("express");
const router = express.Router();

const getDeliveryBoys = require("./getDeliveryBoys");

router.get("/", getDeliveryBoys);

module.exports = router;
