const mongoose = require("mongoose");

//basically creating a table for user profile
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be blank!"],
    },
    email: {
      type: String,
      required: [true, "Please add an E-mail"],
      unique: true,
      trim: true, //removes spaces
      lowercase: true,
      match: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Enter a valid E-mail!",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [8, "Password Limited to (8) characters"],
      maxLength: [16, "Password cannot be more than to (16) characters"],
    },
    mobile: {
      type: String,
      default: "",
    },
    //20627278 //6105311
    idnumber: {
      type: Number,
      minLength: [7],
      maxLength: [8],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
