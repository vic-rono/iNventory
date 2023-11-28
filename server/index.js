//imports
const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config({ path: "./config.env" });

//initialize

const app = express();

//
const PORT = process.env.PORT || 5000;

//connect to mongoDB

mongoose
  .connect(process.env.mongodbUri, {
    //useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
