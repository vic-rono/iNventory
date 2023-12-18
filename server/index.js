//imports
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config({ path: "./config.env" });

const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleware/errorMiddleware")
const app = express();

//middlewares for handling any data format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes middleware
//app.use('/api/rooms', roomsRoute)
app.use("/api/users", userRoute);
//app.use('/api/booking',bookRoute)

app.get("/", (req, res) => {
  res.send("Home Page");
});

//calling the error handler middleware
app.use(errorHandler)
const PORT = process.env.PORT || 5000;

//connect to mongoDB database

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
