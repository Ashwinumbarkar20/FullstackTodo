const router = require('express').Router();
const {verifyinput}=require('../Middleware/UserAuthMiddleware')
const{usersignup}=require("../Controllers/UserControllers")
router.route("/signin").post(verifyinput,usersignup)

module.exports=router