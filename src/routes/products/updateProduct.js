const Product = require("../../models/Product");

const updateProduct = async (req, res) => {
  const { id } = req.body;
  const { name, extras, price, category } = req.body;
  const product = await Product.findByIdAndUpdate(
    id,
    {
      name,
      extras,
      price,
      category,
    },
    {
      new: true,
    }
  ).exec();

  res.send(JSON.stringify(product));
};

module.exports = updateProduct;
