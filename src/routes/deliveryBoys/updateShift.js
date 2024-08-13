const DeliveryBoy = require("../../models/DeliveryBoy");

const updateShift = async (req, res) => {
  const { deliveryBoyId } = req.body;
  const { shiftStatus } = req.body;

  const rider = await DeliveryBoy.findById(deliveryBoyId).exec();

  if (!rider) {
    res.status(404).send({ message: "Rider not found" });
    return;
  } else {
    // find the last shift with rider.lastShift from shifts array
    const lastShift = rider.shifts.id(rider.lastShift);

    if (lastShift && lastShift.end === null && shiftStatus === "start") {
      res.status(400).send({ message: "Shift already started" });
      return;
    }

    if (lastShift && lastShift.end !== null && shiftStatus === "end") {
      res.status(400).send({ message: "Shift already ended" });
      return;
    }

    if (shiftStatus === "start") {
      let shift = {
        start: Date.now().toString(),
        end: null,
      };

      rider.shifts.push(shift);
      rider.status = "active";
    } else if (shiftStatus === "end") {
      const shiftId = rider.lastShift;

      const shift = rider.shifts.id(shiftId);
      console.log(shift);

      shift.end = Date.now().toString();
      rider.status = "inactive";
    }

    await rider.save();

    const riderLastShift = rider.shifts[rider.shifts.length - 1]._id;

    rider.lastShift = riderLastShift;
    await rider.save();

    res.send({ lastShift: riderLastShift, status: shiftStatus });
  }
};

module.exports = updateShift;
