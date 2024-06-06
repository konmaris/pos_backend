const mongoose = require("mongoose");

const productExtraSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  cost: {
    required: true,
    type: Number,
  },
  type: {
    required: true,
    type: String,
  },
  showValue: {
    required: true,
    type: Boolean,
  },
  required: {
    required: true,
    type: Boolean,
  },
  options: [
    {
      label: {
        required: true,
        type: String,
      },
      value: {
        required: true,
        type: String,
      },
      cost: {
        required: true,
        type: Number,
      },
      showValue: {
        required: true,
        type: Boolean,
      },
    },
  ],
});

module.exports = mongoose.model("ProductExtra", productExtraSchema);
