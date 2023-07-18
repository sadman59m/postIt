const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const feedRoute = require("./routes/feed");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoute);

mongoose
  .connect(
    "mongodb+srv://sadman:sadman@cluster0.m9clocs.mongodb.net/messages?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected");
    app.listen(8080);
  })
  .catch((err) => console.log(err));
