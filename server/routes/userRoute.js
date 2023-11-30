const express = require("express");
const router = express.Router();
//const { userRegister, userLogin, getAllUsers }  = require('../controllers/userController');

//handling user profile requests from  the  client  side
const userRegister = () => {};
router.post("/register", userRegister);

module.exports = router;
