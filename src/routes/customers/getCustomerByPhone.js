const Customer = require("../../models/Customer");

const getCustomerByPhone = async (req, res) => {
  const customerToSearch = req.params.id;

  try {
    const customer = await Customer.findOne({ telephone: customerToSearch }).exec();

    if (!customer) {
      res.status(404).send("Customer not found");
      return;
    } else {
      res.send(JSON.stringify(customer));
    }
  } catch (error) {
    res.status(500).send("Error: " + "The customer could not be found. Please try again later.");
    return;
  }
};

module.exports = getCustomerByPhone;
