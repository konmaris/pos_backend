const Order = require("../../models/Order");

const updateStatus = async (req, res) => {
  const { orderId } = req.body;
  const { status } = req.body;

  try {
    const order = await Order.findById(orderId).exec();

    if (!order) {
      res.status(404).send({ message: "Order not found" });
      return;
    }

    order.status = status;
    await order.save();

    res.send(order);
  } catch (error) {
    res.status(500).send({ message: "Error updating status" });
  }
};

module.exports = updateStatus;
