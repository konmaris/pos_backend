const ProductExtra = require("../../models/ProductExtra");

const getExtras = async (req, res) => {
  const extras = await ProductExtra.find({}).exec();
  res.send(JSON.stringify(extras));
};

module.exports = getExtras;
