const { required } = require('joi');
const mongoose = require('mongoose');

const todoSchema=new mongoose.Schema({
  title: {
    type: String,
    required: true
  }, 
  desc:{
    type:String,
    required:true,
   
  },
  isCompleted:{
    type:Boolean,
    default:false,
   },
   createdAt:{
    type:Date,
    default:Date.now
   },
   updateAt:{
    type:Date
   },
   userid:{
    type:String,
    required:true
   }
});
const todos=mongoose.model("todo",todoSchema);
module.exports =  todos