const Category = require("../../models/Category");

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id).exec();
  res.send(JSON.stringify(category));
};

module.exports = deleteCategory;
