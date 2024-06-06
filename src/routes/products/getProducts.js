const Product = require("../../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find({}).exec();
  res.send(JSON.stringify(products));
};

module.exports = getProducts;
