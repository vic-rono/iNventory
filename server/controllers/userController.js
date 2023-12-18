const User = require("../models/userModel");

//const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //const hashedPassword = await bcrypt.hash(password, 10);

    if (!name || !email || !password) {
      return res.status(400).json("Please fill all the required fields");
    }

    //password length validation
    if (password.length < 8) {
      return res.status(400).json("Password Must Be (8) Characters");
    }

    // Validation using express-validator (not included in this snippet)
    // ...

    // Password hashing

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json("Email has already been taken");
    }

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (newUser) {
      return res.send(201).json({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        mobile: newUser.mobile,
        idnumber: newUser.idnumber,
        image: newUser.image,
        designation: newUser.designation,
      });
    } else {
      return res.status(400).json("Invalid user data");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal Server Error");
  }
};

module.exports = {
  userRegister,
};

