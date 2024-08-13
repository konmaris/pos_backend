const express = require("express");
const router = express.Router();

const Order = require("../../models/Order");
const Customer = require("../../models/Customer");

const printOrder = require("../../examples/printOrder");
const printTakeawayOrder = require("../../examples/printTakeawayOrder");

router.post("/", async (req, res) => {
  const order = new Order(req.body);

  const o = req.body;

  // customer object
  const customer = {
    doorbell: o.customer.doorbell,
    street: o.customer.street,
    streetNumber: o.customer.streetNumber,
    floor: o.customer.floor,
    postalCode: o.customer.postalCode,
    telephone: o.customer.telephone,
    notes: o.customer.notes,
  };

  // check if the customer exists
  const _customer = await Customer.findOne({ telephone: o.customer.telephone }).exec();

  if (!_customer) {
    const newCustomer = new Customer({
      telephone: o.customer.telephone,
      addresses: [{ doorbell: o.customer.doorbell, street: o.customer.street, streetNumber: o.customer.streetNumber, floor: o.customer.floor, postalCode: o.customer.postalCode, notes: o.customer.notes }],
    });
    await newCustomer.save();
  } else {
    console.log(_customer.addresses);

    // check if the address exists
    const addressExists = _customer.addresses.some((address) => {
      return address.street === customer.street && address.streetNumber === customer.streetNumber;
    });

    if (!addressExists) {
      console.log("Address does not exist");
      _customer.addresses.push(customer);
      await _customer.save();
    } else {
      console.log("Address already exists");
    }
  }

  const items = o.order.items.map((item) => {
    return {
      category: item.category,
      id: item.id,
      name: item.name,
      price: item.price,
      extras: item.extras,
      quantity: item.quantity,
      comments: item.comments,
    };
  });

  const __customer = await Customer.findOne({ telephone: o.customer.telephone }).exec();

  order.customer = { _id: __customer._id, ...customer };
  order.type = o.type;
  order.order.items = items;
  order.order.total = o.order.total;
  order.orderTime = o.orderTime;
  order.deliveryTime = o.deliveryTime;
  order.status = o.status;
  order.courierTip = o.courierTip;

  order.source = o.source;
  order.paymentMethod = o.paymentMethod;

  const dailyOrderNumber = await Order.find({ orderTime: { $gte: new Date().setHours(0, 0, 0, 0), $lt: new Date().setHours(23, 59, 59, 999) } }).countDocuments();

  order.dailyOrderNumber = dailyOrderNumber + 1;

  await order.save();

  const date_ = new Date();

  // const order_ = { mode: `${order.type.toUpperCase()}`, date: date_.toLocaleDateString("el-GR"), time: date_.toLocaleTimeString("el-GR"), source: `${order.source.toUpperCase()}`, courierTip: order.courierTip, daily_no: order.dailyOrderNumber, paymentMethod: order.paymentMethod.toUpperCase() };
  // const client_ = {
  //   address: customer.street + " " + customer.streetNumber,
  //   postalCode: customer.postalCode,
  //   floor: customer.floor,
  //   bell: customer.doorbell,
  //   phone: customer.telephone,
  //   comments: "ΠΑΡΤΕ ΤΗΛΕΦΩΝΟ ΟΤΑΝ ΦΤΑΣΕΤΕ ΣΤΟ ΚΤΗΡΙΟ",
  // };

  // if (order_.mode === "DELIVERY") {
  //   printOrder(order_, client_, items, order.order.total, 1.0, 0, "192.168.1.200");
  // } else {
  //   printTakeawayOrder(order_, client_, items, order.order.total, 1.0, 0, "192.168.1.200");
  // }

  console.log(req.body);
  res.send("Order pushed!");
});

module.exports = router;
