const express = require("express");
const Order = require("../../models/Order");

const getCurrentOrders = async (req, res) => {
  // find the timestamp of today 12am
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTime = today.getTime();

  const orders = await Order.find({ orderTime: { $gte: todayTime } }).exec();

  res.send(JSON.stringify(orders));
};

module.exports = getCurrentOrders;
