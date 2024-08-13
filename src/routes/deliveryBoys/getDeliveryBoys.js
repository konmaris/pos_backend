const DeliveryBoy = require("../../models/DeliveryBoy");

const getDeliveryBoys = async (req, res) => {
  const deliveryBoys = await DeliveryBoy.find({}).select(["_id", "name", "status", "lastShift"]).exec();
  res.send(JSON.stringify(deliveryBoys));
};

module.exports = getDeliveryBoys;
