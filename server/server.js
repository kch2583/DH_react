const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const routes = require("./routes/index");

app.use(cors());

app.use(bodyParser.json());
app.use("/api", routes);

//conncet to mongodb server
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://chanhee:kimchan8855@cluster0-1ay2j.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("React").collection("Leather");
  // perform actions on the collection object
  client.close();
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
