const mongoose = require("mongoose");

const deliveryBoySchema = new mongoose.Schema({
  name: {
    required: false,
    type: String,
  },
  telephone: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("DeliveryBoy", deliveryBoySchema);
