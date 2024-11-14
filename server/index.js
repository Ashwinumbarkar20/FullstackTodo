const express =require ("express")
const cors=require("cors")
const dotenv = require('dotenv');
const todos =require("./Model/TodoModel")
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

const initialData = [
 
  [
    {
      "title": "Buy groceries",
      "desc": "Get milk, eggs, and bread",
      "isCompleted": false,
      "createdAt": "2024-11-10T10:00:00Z",
      "updateAt": "2024-11-10T12:00:00Z"
    },
    {
      "title": "Read a book",
      "desc": "Read 30 pages of a novel",
      "isCompleted": false,
      "createdAt": "2024-11-09T14:00:00Z"
    },
    {
      "title": "Complete assignment",
      "desc": "Finish math homework",
      "isCompleted": true,
      "createdAt": "2024-11-08T08:00:00Z",
      "updateAt": "2024-11-08T10:00:00Z"
    },
    {
      "title": "Plan trip",
      "desc": "Organize itinerary for vacation",
      "isCompleted": false,
      "createdAt": "2024-11-07T16:00:00Z"
    },
    {
      "title": "Call plumber",
      "desc": "Fix the kitchen sink leak",
      "isCompleted": false,
      "createdAt": "2024-11-07T09:00:00Z"
    },
    {
      "title": "Exercise",
      "desc": "Go for a 30-minute jog",
      "isCompleted": true,
      "createdAt": "2024-11-06T06:30:00Z",
      "updateAt": "2024-11-06T07:30:00Z"
    },
    {
      "title": "Water plants",
      "desc": "Take care of indoor plants",
      "isCompleted": false,
      "createdAt": "2024-11-05T15:00:00Z"
    },
    {
      "title": "Prepare presentation",
      "desc": "Create slides for the meeting",
      "isCompleted": false,
      "createdAt": "2024-11-04T20:00:00Z"
    },
    {
      "title": "Clean the garage",
      "desc": "Organize and declutter",
      "isCompleted": true,
      "createdAt": "2024-11-03T10:00:00Z",
      "updateAt": "2024-11-03T13:00:00Z"
    },
    {
      "title": "Buy birthday gift",
      "desc": "Get a gift for John’s birthday",
      "isCompleted": false,
      "createdAt": "2024-11-02T11:00:00Z"
    },
    {
      "title": "Send emails",
      "desc": "Reply to client queries",
      "isCompleted": true,
      "createdAt": "2024-11-01T08:30:00Z",
      "updateAt": "2024-11-01T09:00:00Z"
    },
    {
      "title": "Watch tutorial",
      "desc": "Learn Node.js basics",
      "isCompleted": false,
      "createdAt": "2024-10-31T14:00:00Z"
    },
    {
      "title": "Bake a cake",
      "desc": "Make a chocolate cake",
      "isCompleted": true,
      "createdAt": "2024-10-30T17:00:00Z",
      "updateAt": "2024-10-30T19:00:00Z"
    },
    {
      "title": "Do laundry",
      "desc": "Wash clothes and sheets",
      "isCompleted": false,
      "createdAt": "2024-10-29T09:00:00Z"
    },
    {
      "title": "Grocery shopping",
      "desc": "Get fresh vegetables",
      "isCompleted": true,
      "createdAt": "2024-10-28T13:00:00Z",
      "updateAt": "2024-10-28T15:00:00Z"
    }
  ]
 
];





mongoose.connect(process.env.DBURI).
then(()=>{  //Starting the server
  console.log("DB connected")

  app.listen(process.env.PORT,()=>{
      console.log("Server is Running...",process.env.PORT)
  })}).
catch((e)=>{console.log("not Connected",e)})
