const express = require("express");
const Order = require("../../models/Order");

const getRiderCurrentOrders = async (req, res) => {
  const riderId = req.params.id;
  const shiftId = req.query.shift_id;

  console.log(shiftId);

  const orders = await Order.find({ deliveryBoy: riderId, deliveryBoyShift: shiftId }).select(["_id", "dailyOrderNumber", "customer", "orderTime", "status", "total", "paymentMethod", "order.total", "courierTip"]).exec();

  res.json(orders);
};

module.exports = getRiderCurrentOrders;
