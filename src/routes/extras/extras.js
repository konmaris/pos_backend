const express = require("express");
const router = express.Router();

const getExtras = require("./getExtras");

router.get("/", getExtras);
router.post("/", require("./pushExtra"));
router.put("/", require("./updateExtra"));
router.delete("/:id", require("./deleteExtra"));

module.exports = router;
