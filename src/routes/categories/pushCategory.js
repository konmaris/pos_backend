const Category = require("../../models/Category");

const pushCategory = async (req, res) => {
  const { name, label } = req.body;
  const category = new Category({
    name,
    label,
  });
  await category.save();
  res.send(JSON.stringify(category));
};

module.exports = pushCategory;
