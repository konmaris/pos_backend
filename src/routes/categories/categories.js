const express = require("express");
const router = express.Router();

const getCategories = require("./getCategories");

router.get("/", getCategories);

module.exports = router;
