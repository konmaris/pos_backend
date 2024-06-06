const Category = require("../../models/Category");

const getCategories = async (req, res) => {
  const categories = await Category.find({}).exec();
  res.send(JSON.stringify(categories));
};

module.exports = getCategories;
