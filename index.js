const express = require("express")
const cors = require("cors");
require("./database/config");
const User = require("./database/user")

app = express();
app.use(cors());


app.use(express.json())
app.post("/",async(req,resp)=>{
   let get = new User(req.body);
   let result = await get.save();
   resp.send(result);
})
app.listen(5500);