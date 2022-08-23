const express = require("express");
const cors = require("cors");
require("./database/config");
const User = require("./database/user");
const Speaker = require("./database/speakerform");

const app = express();

app.use(cors());

// app.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://62ee4cec9772e9000905a3b4--bespoke-cranachan-6caef0.netlify.app/"
//   ); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json());
app.post("/", async (req, resp) => {
  resp.setHeader("Access-Control-Allow-Methods", "*");
  resp.setHeader("Access-Control-Allow-Headers", "*");
  let get = new User(req.body);
  let result = await get.save();
  resp.send(result);
});

app.post("/sponsor", async (req, resp) => {
  resp.setHeader("Access-Control-Allow-Methods", "*");
  resp.setHeader("Access-Control-Allow-Headers", "*");
  let get = new Speaker(req.body);
  let result = await get.save();
  resp.send(result);
});

app.listen(5500);
