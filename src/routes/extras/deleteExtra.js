const ProductExtra = require("../../models/ProductExtra");

const deleteExtra = async (req, res) => {
  const { id } = req.params;
  const extra = await ProductExtra.findByIdAndDelete(id).exec();
  res.send(JSON.stringify(extra));
};

module.exports = deleteExtra;
