const Customer = require("../../models/Customer");

const pushCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.send(customer);
};

module.exports = pushCustomer;
