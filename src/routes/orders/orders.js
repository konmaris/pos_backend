const express = require("express");
const router = express.Router();

const getCurrentOrders = require("./getCurrentOrders");

const updateStatus = require("./updateStatus");
const assignOrder = require("./assignOrder");
const cancelOrder = require("./cancelOrder");
const getRiderCurrentOrders = require("./getRiderCurrentOrders");

router.get("/current", getCurrentOrders);
router.get("/current/:id", getRiderCurrentOrders);

router.post("/", require("./pushOrder"));

router.get("/:id", require("./getOrder"));

router.put("/status", updateStatus);
router.put("/assign", assignOrder);
router.put("/cancel", cancelOrder);

module.exports = router;
