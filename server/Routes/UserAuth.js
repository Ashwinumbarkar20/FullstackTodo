const router = require('express').Router();
const {verifyInput,verifyLoginInput}=require('../Middleware/UserAuthMiddleware')
const{usersignup,userLogin}=require("../Controllers/UserControllers")
// User signin/signp Routes--------------------------
router.route("/signup").post(verifyInput,usersignup)
router.route("/signin").post(verifyLoginInput,userLogin)

// ---------------------------
module.exports=router