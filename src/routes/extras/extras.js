const express = require("express");
const router = express.Router();

const getExtras = require("./getExtras");

router.get("/", getExtras);

module.exports = router;
