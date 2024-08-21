const express = require("express");
const router = express.Router();

const getCategories = require("./getCategories");

router.get("/", getCategories);
router.post("/", require("./pushCategory"));
router.put("/", require("./updateCategory"));
router.delete("/:id", require("./deleteCategory"));

module.exports = router;
