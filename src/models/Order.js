const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    doorbell: {
      required: true,
      type: String,
    },
    floor: {
      required: true,
      type: String,
    },
    postalCode: {
      required: true,
      type: String,
    },
    street: {
      required: true,
      type: String,
    },
    streetNumber: {
      required: true,
      type: String,
    },
    telephone: {
      required: true,
      type: String,
    },
  },
  deliveryBoy: {
    required: false,
    type: String,
  },
  deliveryTime: {
    required: false,
    type: String,
  },
  order: {
    items: {
      required: true,
      type: [
        {
          category: { required: true, type: String },
          id: { required: true, type: String },
          name: { required: true, type: String },
          price: { required: true, type: Number },
          extras: [
            {
              optionName: { required: false, type: String },
              optionValue: { required: false, type: String },
              optionType: { required: false, type: String },
              optionPrice: { required: false, type: Number },
              optionShow: { required: false, type: Boolean },
            },
          ],
        },
      ],
    },
    total: {
      required: true,
      type: Number,
    },
  },
  orderTime: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
