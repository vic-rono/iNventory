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
      default: "07XX XXX XXX",
    },
    //20627278 //6105311
    idnumber: {
      type: Number,
      minLength: [7],
      maxLength: [8],
    },
    image: {
      type:String,
      required: [true, "Add Your Profile Photo"],
      default: "https://www.freepik.com/free-vector/illustration-user-avatar-icon_2606572.htm#query=avatar%20profile&position=16&from_view=search&track=ais&uuid=92b7f083-79f7-4a93-8495-c6b50e24cfd6"
    },
    designation: {
      type: String,
      required: [true, "Designation cannot be blank!"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
