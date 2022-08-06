const express = require("express");
const cors = require("cors");
require("./database/config");
const User = require("./database/user");

//app.use(cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f575f2505d4d474485204639dc137cfb"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.post("/", async (req, resp) => {
  resp.setHeader("Access-Control-Allow-Methods", "*");
  resp.setHeader("Access-Control-Allow-Headers", "*");
  let get = new User(req.body);
  let result = await get.save();
  resp.send(result);
});
app.listen(5500);
