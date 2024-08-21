const ProductExtra = require("../../models/ProductExtra");

const pushExtra = async (req, res) => {
  const { name, cost, type, showValue, required, options, label } = req.body;
  const extra = new ProductExtra({
    name,
    cost,
    type,
    showValue,
    required,
    options,
    label,
  });
  await extra.save();
  res.send(JSON.stringify(extra));
};

module.exports = pushExtra;

/*
{
      
    "name": "sugar",
    "cost": 0,
    "type": "multiple_choice",
    "showValue": true,
    "required": true,
    "options": [
        {
            "label": "Black",
            "value": "0",
            "cost": 0,
            "showValue": true,
            
        },  
    ],
    "label": "Sugar level"
},
{
    "name": "fresh_milk",
    "cost": 0.5,
    "type": "checkbox",
    "showValue": false,
    "required": false,
    "options": [],
    "label": "Fresh milk"
}
*/
