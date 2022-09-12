const express = require("express");
const cors = require("cors");
require("./database/config");
// const User = require("./database/user");
// const Speaker = require("./database/speakerform");
const { MongoClient } = require("mongodb");

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

const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  auth: {
    user: "faiz@globallegalassociation.org",
    pass: "f@iz#3904eFs",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
// app.post("/", async (req, resp) => {
//   resp.setHeader("Access-Control-Allow-Methods", "*");
//   resp.setHeader("Access-Control-Allow-Headers", "*");
//   let get = new User(req.body);
//   let result = await get.save();
//   resp.send(result);
// });

app.post("/", async (req, resp) => {
  const uri =
    "mongodb+srv://abscod:abscod12345@cluster0.tlalbb1.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  client.connect((err) => {
    console.log(err);
  });
  const collection = client.db("globalLegalAssociation").collection("sponsors");
  collection.insertOne(req.body);
  transporter.sendMail({
    from: "faiz@globallegalassociation.org",
    to: "mohakchutani1@gmail.com",
    subject: `${req.body.firstName} wants to contact with you`,
    text: `Here below are the details
    first Name : ${req.body.firstName}
    Last Name : ${req.body.lastName}
    Email : ${req.body.email}
    Company Name : ${req.body.companyName}
    Phone Number : ${req.body.phone}
    Exhibition : ${req.body.exhibition}
    Number of passes: ${req.body.passes}
    Sponsor Assets: ${req.body.sponsorAssets}
    `,
  });
});

// app.post("/speaker", async (req, resp) => {
//   resp.setHeader("Access-Control-Allow-Methods", "*");
//   resp.setHeader("Access-Control-Allow-Headers", "*");
//   let get = new Speaker(req.body);
//   let result = await get.save();
//   resp.send(result);
// });

app.post("/speaker", async (req, resp) => {
  const uri =
    "mongodb+srv://abscod:abscod12345@cluster0.tlalbb1.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  client.connect((err) => {
    console.log(err);
  });
  const collection = client.db("globalLegalAssociation").collection("speakers");
  collection.insertOne(req.body);
  transporter.sendMail({
    from: "faiz@globallegalassociation.org",
    to: "mohakchutani1@gmail.com",
    subject: `${req.body.firstName} wants to contact with you`,
    text: `Here below are the details
    first Name : ${req.body.firstName}
    Last Name : ${req.body.lastName}
    Email : ${req.body.email}
    Company Name : ${req.body.companyName}
    Phone Number : ${req.body.phone}
    Exhibition : ${req.body.exhibition}
    Number of passes: ${req.body.passes}
    Sponsor Assets: ${req.body.sponsorAssets} `,
  });
});
app.post("/contact", async (req, resp) => {
  const uri =
    "mongodb+srv://abscod:abscod12345@cluster0.tlalbb1.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  client.connect((err) => {
    console.log(err);
  });
  const collection = client.db("globalLegalAssociation").collection("contacts");
  collection.insertOne(req.body);
  console.log(req.body);
  transporter.sendMail({
    from: "faiz@globallegalassociation.org",
    to: "mohakchutani1@gmail.com",
    subject: `${req.body.name} wants to contact with you`,
    text: `Here below are the details
    Name : ${req.body.name}
    Email : ${req.body.email}
    Phone Number : ${req.body.phone}
    Message : ${req.body.text}
    `,
  });
});

app.listen(5500);
console.log("server running");
