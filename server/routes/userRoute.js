const express = require("express");
const router = express.Router();
const { userRegister}  = require('../controllers/userController');

//handling user profile requests from  the  client  side

router.post("/register", userRegister);

module.exports = router;

