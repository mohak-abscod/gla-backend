const express = require("express")
const cors = require("cors");
require("./database/config");
const User = require("./database/user")

app = express();
app.use(cors({
  origin: ["https://master--bespoke-cranachan-6caef0.netlify.app/"], // the link of my front-end app on Netlify
  methods: ["GET", "POST"],
  credentials: true
}))

app.use(express.json())
app.post("/",async(req,resp)=>{
   let get = new User(req.body);
   let result = await get.save();
   resp.send(result);
})
app.listen(5500);