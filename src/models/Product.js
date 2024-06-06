const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  extras: [String],
});

module.exports = mongoose.model("Product", productSchema);
