const express = require("express");
const router = express.Router();

const Order = require("../../models/Order");

router.post("/", async (req, res) => {
  const order = new Order(req.body);

  const o = req.body;

  const customer = {
    doorbell: o.customer.doorbell,
    street: o.customer.street,
    streetNumber: o.customer.streetNumber,
    telephone: o.customer.telephone,
    floor: o.customer.floor,
    postalCode: o.customer.postalCode,
  };

  const items = o.order.items.map((item) => {
    return {
      category: item.category,
      id: item.id,
      name: item.name,
      price: item.price,
      extras: item.extras,
    };
  });

  order.customer = customer;
  order.type = o.type;
  order.order.items = items;
  order.order.total = o.order.total;
  order.orderTime = o.orderTime;
  order.deliveryTime = o.deliveryTime;
  order.status = o.status;

  await order.save();

  console.log(req.body);
  res.send("Order pushed!");
});

module.exports = router;
