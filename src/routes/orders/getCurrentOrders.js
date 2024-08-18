const express = require("express");
const Order = require("../../models/Order");

const getCurrentOrders = async (req, res) => {
  // find the timestamp of today 12am
  let date = new Date();

  let correctedDate = new Date(date.getTime() - 180 * 60 * 1000);

  correctedDate.setHours(0, 0, 0, 0);

  console.log({ correctedDate: correctedDate.getTime() });

  const orders = await Order.find({ orderTime: { $gte: correctedDate.getTime() } }).exec();

  res.send(JSON.stringify(orders));
};

module.exports = getCurrentOrders;
