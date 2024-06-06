const express = require("express");
const router = express.Router();

const getProducts = require("./getProducts");

router.get("/", getProducts);

module.exports = router;
