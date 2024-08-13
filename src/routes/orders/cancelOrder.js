const Order = require("../../models/Order");

const cancelOrder = async (req, res) => {
  const { orderId } = req.body;

  try {
    const order = await Order.findById(orderId).exec();

    if (!order) {
      res.status(404).send({ message: "Order not found" });
      return;
    }

    order.status = "CANCELLED";
    await order.save();

    res.send(order);
  } catch (error) {
    res.status(500).send({ message: "Error cancelling order" });
  }
};

module.exports = cancelOrder;
