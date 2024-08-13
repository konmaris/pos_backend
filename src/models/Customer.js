const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    required: false,
    type: String,
  },
  addresses: {
    required: false,
    type: [
      {
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
      },
    ],
  },

  telephone: {
    unique: true,
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
