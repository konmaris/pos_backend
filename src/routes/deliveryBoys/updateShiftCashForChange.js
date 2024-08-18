const DeliveryBoy = require("../../models/DeliveryBoy");

const updateShiftCashForChange = async (req, res) => {
  const { deliveryBoyId } = req.body;
  const { cashForChange } = req.body;

  const rider = await DeliveryBoy.findById(deliveryBoyId).exec();

  if (!rider) {
    res.status(404).send({ message: "Rider not found" });
    return;
  }

  if (!rider.lastShift) {
    res.status(400).send({ message: "Rider has no last shift" });
    return;
  }

  const lastShift = rider.shifts.id(rider.lastShift);

  lastShift.cashForChange = cashForChange;

  await rider.save();

  res.send({ lastShift: rider.lastShift, cashForChange: cashForChange });
};

module.exports = updateShiftCashForChange;
