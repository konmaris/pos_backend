const DeliveryBoy = require("../../models/DeliveryBoy");

const getDeliveryBoys = async (req, res) => {
  const deliveryBoys = await DeliveryBoy.find({}).exec();
  res.send(JSON.stringify(deliveryBoys));
};

module.exports = getDeliveryBoys;
