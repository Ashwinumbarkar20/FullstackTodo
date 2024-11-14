const router = require('express').Router();

const {verifytoken} =require("../Middleware/UserAuthMiddleware")
const {getAlltodo}=require("../Controllers/TodoController")
router.route("/getAllTodos").get(verifytoken,getAlltodo)
 
// router.route("/Alltodos").post("middleware","controller")
// router.route("/Alltodos").put("middleware","controller")
// router.route("/Alltodos").delete("middleware","controller")
module.exports=router
