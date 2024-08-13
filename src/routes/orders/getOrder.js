const express = require("express");
const Order = require("../../models/Order");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id).exec();
  res.send(order);
});

module.exports = router;
