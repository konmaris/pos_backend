const Product = require("../../models/Product");

const pushProduct = async (req, res) => {
  const { name, price, category } = req.body;
  const product = new Product({
    name,
    extras,
    price,
    category,
  });
  await product.save();
  res.send(JSON.stringify(product));
};

module.exports = pushProduct;

/* 

{
    "category": "66607b9ffb763aad51958ae9",
    "name": "Freddo Espresso",
    "price": 2.2,
    "extras": [
        "6660792d1bb8a57c0c8a5484",
        "666079c08ab0ef54e3f4cd35",
        "666079fc4c59134b89dc2587",
        "66607a37179163cef6e901e1"
    ],
},

*/
