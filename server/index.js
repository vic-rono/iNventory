//imports
const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//initialize

const app = express();

//
const PORT = process.env.PORT || 5000;

//connect to mongoDB

mongoose
  .connect(process.env.mongodbUri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
