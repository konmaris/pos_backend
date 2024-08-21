const Product = require("../../models/Product");

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id).exec();
  res.send(JSON.stringify(product));
};

module.exports = deleteProduct;
