//rest api using express
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://konmaris:Thesis123@thesis0.j3hxqua.mongodb.net/thesis?retryWrites=true&w=majority&appName=Thesis0";

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// this middleware will be executed for every request to the app
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const orders = require("./src/routes/orders/orders");
app.use("/orders", orders);

const categories = require("./src/routes/categories/categories");
app.use("/categories", categories);

const products = require("./src/routes/products/products");
app.use("/products", products);

const extras = require("./src/routes/extras/extras");
app.use("/extras", extras);

const customers = require("./src/routes/customers/customers");
app.use("/customers", customers);

const deliveryBoys = require("./src/routes/deliveryBoys/deliveryBoys");
app.use("/deliveryBoys", deliveryBoys);

app.listen(process.env.PORT || 8000, () => {
  console.log(`API running ${process.env.PORT || 8000}...`);
});
