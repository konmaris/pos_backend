const express = require("express");
const router = express.Router();

router.put("/", (req, res) => {
  res.send("PUT /orders !!!!" + req.query.id);
});

module.exports = router;
