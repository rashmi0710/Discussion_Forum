const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userControllers");


//Routes
router.post("/user/register", controllers.userRegister);
router.post("/user/sendotp", controllers.userOtpSend);
router.post("/user/login", controllers.userLogin);
module.exports = router;