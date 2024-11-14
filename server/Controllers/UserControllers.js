const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')
const UserModel =require('../Model/UserModel')

const usersignup=async (req,res)=>{

const{username,email,password}=req.body

if(await UserModel.findOne({email:email})){
    res.status(400).json({Message:"User is Already exists"})
}
else{
    const hashpassword=await bcrypt.hash(password,12);
    const newuser=({...req.body,password:hashpassword})
    await UserModel.create(newuser).then(()=>{
        res.status(201).json({message:`${username} is Created`})
     }).catch((e)=>{
console.log(e)
     })
  }

}
const userLogin=async (req,res)=>{
    const user = await UserModel.findOne({ email: req.body.email });
    if(user){
if(await bcrypt.compare(req.body.password, user.password)){
    payload={
                userid:user._id,
 username:user.username,
 email:user.email       
    }
const token=jwt.sign(payload,process.env.SCERETKEY,{expiresIn:"24h"})
res.status(200).json({Message:"login Succesful",useDetails:{userid:user._id,
 username:user.username,
 email:user.email},token:token})
}
else{
    res.status(404).send({message:"Unauthorised Access"})
}
    }
    else{
        return res.status(404).json({ message: 'User not found' });
    }
    
}

module.exports={usersignup,userLogin}