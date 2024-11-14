const mongoose = require('mongoose');

cons todoSchema=new mongoose.const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  = new Schema({
  title: {
    type: String,
    required: true
  }, 
  desc:{
    type:String,
    required:true,
    minlength:10,
    maxlength:30
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
   }
});
const todos=mongoose.model("todo",todoSchema);
module.exports =  todos