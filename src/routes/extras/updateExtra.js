const ProductExtra = require("../../models/ProductExtra");

const updateExtra = async (req, res) => {
  const { id, name, cost, type, showValue, required, options, label } = req.body;
  const extra = await ProductExtra.findByIdAndUpdate(
    id,
    {
      name,
      cost,
      type,
      showValue,
      required,
      options,
      label,
    },
    {
      new: true,
    }
  ).exec();
  res.send(JSON.stringify(extra));
};

module.exports = updateExtra;
