const joi =require("joi")
const jwt = require('jsonwebtoken');

const verifyinput=(req,res,next)=>{
const userdata=joi.object({
    username:joi.string().min(6).max(30).required(),
    email:joi.string().required(),
    password:joi.string().min(4).max(20).required()
})
const {error}=userdata.validate(req.body)
if(error)
{
    res.status(400).json({Message:"Bad Request"})
}
else{
    next();
}

}
module.exports={verifyinput}