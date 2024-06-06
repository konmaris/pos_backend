const express = require("express");
const router = express.Router();

const getCurrentOrders = require("./getCurrentOrders");
const getOrders = require("./getOrders");
const updateStatus = require("./updateStatus");
const assignOrder = require("./assignOrder");

router.get("/current", getCurrentOrders);
router.get("/", getOrders);
router.post("/", require("./pushOrder"));
// router.put("/:id", require("./updateOrder"));
// router.get("/:id", require("./getOrder"));
router.put("/status", updateStatus);
router.put("/assign", assignOrder);

module.exports = router;
