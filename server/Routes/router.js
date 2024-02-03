const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userControllers");


//Routes
router.post("/user/register", controllers.userRegister);

module.exports = router;