const router = require('express').Router();

const {verifytoken} =require("../Middleware/UserAuthMiddleware")
const {getAlltodo,Editsingletodo,Addtodo,DeleteTodo}=require("../Controllers/TodoController")
router.route("/getAllTodos").get(verifytoken,getAlltodo)
 
 router.route("/Deletetodo").delete(verifytoken,DeleteTodo)
 router.route("/updatetodo").put(verifytoken,Editsingletodo)
 router.route("/Addtodo").post(verifytoken,Addtodo)
module.exports=router
