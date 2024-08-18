const express = require("express");
const Order = require("../../models/Order");

const getCurrentOrders = async (req, res) => {
  // find the timestamp of today 12am
  let date = new Date();
  date.setHours(0, 0, 0, 0);

  let timezoneOffset = date.getTimezoneOffset();
  let grOffset = 180; // this is the offset for the greek timezone

  const today = new Date(date.getTime() + (grOffset + timezoneOffset) * 60 * 1000);
  const todayTime = today.getTime();

  const orders = await Order.find({ orderTime: { $gte: todayTime } }).exec();

  res.send(JSON.stringify(orders));
};

module.exports = getCurrentOrders;
