const DeliveryBoy = require("../../models/DeliveryBoy");

const getDeliveryBoy = async (req, res) => {
  const deliveryBoyId = req.params.id;

  const deliveryBoy = await DeliveryBoy.findById(deliveryBoyId).exec();
  res.json(deliveryBoy);
};

module.exports = getDeliveryBoy;
