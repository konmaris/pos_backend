const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("GET /orders !!!!" + req.params.id);
});

module.exports = router;
