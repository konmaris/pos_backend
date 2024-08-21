const Customer = require("../../models/Customer");

const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findByIdAndDelete(id).exec();
  res.send(JSON.stringify(customer));
};

module.exports = deleteCustomer;
