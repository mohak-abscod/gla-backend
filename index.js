const express = require("express")
const cors = require("cors");
require("./database/config");
const User = require("./database/user")



app.use(
  cors({
    origin: ["https://master--bespoke-cranachan-6caef0.netlify.app/"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    origin: true,
  })
);
app.use(express.json())
app.post("/",async(req,resp)=>{
   let get = new User(req.body);
   let result = await get.save();
   resp.send(result);
})
app.listen(5500);