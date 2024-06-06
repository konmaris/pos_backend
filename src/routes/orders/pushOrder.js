const express = require("express");
const router = express.Router();

const Order = require("../../models/Order");
const Customer = require("../../models/Customer");

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

  const _customer = await Customer.findOne({ telephone: o.customer.telephone }).exec();

  if (!_customer) {
    const newCustomer = new Customer(customer);
    await newCustomer.save();
  }

  const _customer2 = await Customer.findOne({ telephone: o.customer.telephone }).exec();

  const items = o.order.items.map((item) => {
    return {
      category: item.category,
      id: item.id,
      name: item.name,
      price: item.price,
      extras: item.extras,
    };
  });

  order.customer = _customer2;
  order.type = o.type;
  order.order.items = items;
  order.order.total = o.order.total;
  order.orderTime = o.orderTime;
  order.deliveryTime = o.deliveryTime;
  order.status = o.status;

  order.source = o.source;

  const dailyOrderNumber = await Order.find({ orderTime: { $gte: new Date().setHours(0, 0, 0, 0), $lt: new Date().setHours(23, 59, 59, 999) } }).countDocuments();

  order.dailyOrderNumber = dailyOrderNumber + 1;

  await order.save();

  console.log(req.body);
  res.send("Order pushed!");
});

module.exports = router;
