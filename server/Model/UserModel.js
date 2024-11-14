const mongoose = require('mongoose');
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
    type:String,
    required:true,
    minlength:6,

    },
    createdAt:{
        type:Date,
        default:Date.new

    }
})
//user Model
const userModel=mongoose.model("User",UserSchema)
module.exports=userModel;