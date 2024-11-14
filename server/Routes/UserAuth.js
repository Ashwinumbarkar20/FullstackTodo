const router = require('express').Router();
router.route("/signup").post("middleware","controller")
router.route("/signin").ger("middleare","controller")

module.exports=router