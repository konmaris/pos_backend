const category = require("../../models/Category");

const updateCategory = async (req, res) => {
  const { id, name, label } = req.body;
  const updatedCategory = await category
    .findByIdAndUpdate(
      id,
      {
        name,
        label,
      },
      {
        new: true,
      }
    )
    .exec();
  res.send(JSON.stringify(updatedCategory));
};

module.exports = updateCategory;
