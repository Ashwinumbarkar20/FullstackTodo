const express =require ("express")
const cors=require("cors")
const dotenv = require('dotenv');

const  mongoose = require('mongoose');
const UserAuth =require("./Routes/UserAuth")
const AllTodos =require("./Routes/AllTodos")
const router=express.Router();
dotenv.config();
// const port = process.env.PORT || 5000;
const app=express();
app.use(cors());
app.use(express.json());
app.use("/UserAuth",UserAuth)
app.use("/GetTodos",AllTodos) 
mongoose.connect(process.env.DBURI).
then(()=>{  //Starting the server
  console.log("DB connected")
  app.listen(process.env.PORT,()=>{
      console.log("Server is Running...",process.env.PORT)
  })}).
catch((e)=>{console.log("not Connected",e)})
