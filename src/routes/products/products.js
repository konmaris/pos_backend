const express = require("express");
const router = express.Router();

const getProducts = require("./getProducts");

router.get("/", getProducts);
router.post("/", require("./pushProduct"));
router.put("/", require("./updateProduct"));
router.delete("/:id", require("./deleteProduct"));

module.exports = router;
