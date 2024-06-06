const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  label: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
