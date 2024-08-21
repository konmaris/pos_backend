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
  status: {
    required: false,
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  shifts: {
    required: false,
    type: [
      {
        start: {
          required: false,
          type: String,
        },
        end: {
          required: false,
          type: String,
        },
        cashForChange: {
          required: false,
          type: Number,
          default: 0,
        },
      },
    ],
    default: [],
  },
  lastShift: {
    required: false,
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("DeliveryBoy", deliveryBoySchema);
