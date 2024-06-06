const express = require("express");
const ProductExtra = require("../../models/ProductExtra");
const Product = require("../../models/Product");
const Category = require("../../models/Category");

const getOrders = async (req, res) => {
  const product = new Product({
    category: "66607b9ffb763aad51958ae9",
    name: "Freddo Cappuccino",
    price: 2.4,
    extras: ["6660792d1bb8a57c0c8a5484", "666079c08ab0ef54e3f4cd35", "666079fc4c59134b89dc2587", "66607a37179163cef6e901e1"],
  });

  await product.save();

  res.send("GET /orders !!!!");
};

module.exports = getOrders;
