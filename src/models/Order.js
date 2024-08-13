const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  source: {
    required: false,
    type: String,
  },
  customer: {
    type: {
      doorbell: {
        required: false,
        type: String,
      },
      floor: {
        required: false,
        type: String,
      },
      postalCode: {
        required: false,
        type: String,
      },
      street: {
        required: false,
        type: String,
      },
      streetNumber: {
        required: false,
        type: String,
      },
      notes: {
        required: false,
        type: String,
      },
      telephone: {
        required: false,
        type: String,
      },
      _id: {
        required: false,
        type: String,
      },
    },
  },
  deliveryBoy: {
    required: false,
    type: String,
  },
  deliveryBoyShift: {
    required: false,
    type: String,
  },
  deliveryTime: {
    required: false,
    type: String,
  },
  dailyOrderNumber: {
    required: true,
    type: Number,
  },
  courierTip: {
    required: false,
    type: Number,
  },
  order: {
    items: {
      required: true,
      type: [
        {
          comments: { required: false, type: String },
          category: { required: true, type: String },
          id: { required: true, type: String },
          name: { required: true, type: String },
          price: { required: true, type: Number },
          quantity: { required: true, type: Number },
          extras: [
            {
              optionName: { required: false, type: String },
              optionValue: { required: false, type: String },
              optionLabel: { required: false, type: String },
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
    enum: ["NEW_ORDER", "ASSIGNED", "DELIVERED", "CANCELLED", "COMPLETED"],
  },
  type: {
    required: true,
    type: String,
  },
  paymentMethod: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
