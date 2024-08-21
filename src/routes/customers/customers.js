const express = require("express");
const router = express.Router();

const getCustomerByPhone = require("./getCustomerByPhone");
const pushCustomer = require("./pushCustomer");

// use getCustomer logic for /:id
router.get("/:id", getCustomerByPhone);
router.post("/", pushCustomer);
router.delete("/:id", require("./deleteCustomer"));

module.exports = router;
