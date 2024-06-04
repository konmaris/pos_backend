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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const orders = require("./src/routes/orders/orders");
app.use("/orders", orders);

app.listen(process.env.PORT || 8000, () => {
  console.log(`API running ${process.env.PORT || 8000}...`);
});
