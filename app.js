const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//requiring model
const Group = require("./models/group");

//here we will require the routes
const groups = require("./routes/groups");

//setup of app and db

//needed this line to properly parse json objects in req
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongoose"));
db.once("open", function () {
  console.log("Connected to the database");
});

//routes
app.use("/groups", groups);

//listen to port

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("App started on post 3000");
});
