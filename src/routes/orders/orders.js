const express = require("express");
const router = express.Router();

router.get("/", require("./getOrders"));
router.post("/", require("./pushOrder"));
router.put("/:id", require("./updateOrder"));
router.get("/:id", require("./getOrder"));

module.exports = router;
