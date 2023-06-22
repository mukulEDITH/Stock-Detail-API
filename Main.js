const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const companyController = require("./Controllers/companyController");
const cors = require("cors");
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/smarket").then(() => {
  console.log("Connected to database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(companyController);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
