const DeliveryBoy = require("../../models/DeliveryBoy");

const pushDeliveryBoy = async (req, res) => {
  const { name, phone, email } = req.body;
  const deliveryBoy = new DeliveryBoy({
    name,
    telephone,
  });
  await deliveryBoy.save();
  res.send(JSON.stringify(deliveryBoy));
};

module.exports = pushDeliveryBoy;
