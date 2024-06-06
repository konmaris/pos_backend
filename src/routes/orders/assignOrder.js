const Order = require("../../models/Order");

const assignOrder = async (req, res) => {
  const { orderId, deliveryBoyId } = req.body;

  try {
    const order = await Order.findById(orderId).exec();

    if (!order) {
      res.status(404).send({ message: "Order not found" });
      return;
    }

    order.deliveryBoy = deliveryBoyId;
    await order.save();

    res.send(order);
  } catch (error) {
    res.status(500).send({ message: "Error assigning order" });
  }
};

module.exports = assignOrder;
