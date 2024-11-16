const Joi =require("joi")
const jwt=require("jsonwebtoken")
const userdata=Joi.object({
    username:Joi.string().min(4).max(30).required(),
    email:Joi.string().required(),
    password:Joi.string().min(4).max(20).required()
})

const verifyInput=(req,res,next)=>{

const {error}=userdata.validate(req.body)
if(error)
{
    res.status(400).json({Message:error})
}
else{
    next();
}

}

const verifyLoginInput=(req,res,next)=>{
    const userdata=Joi.object({
        email:Joi.string().required(),
        password:Joi.string().min(4).max(20).required()
    })
    const {error}=userdata.validate(req.body)
    if(error)
        {
            res.status(400).json({Message:error})
        }
        else{
            next();
        }
}

const verifytoken=(req,res,next)=>{
    const token =req.headers["authorization"].split(" ")[1]
   
    if(!token)
    {
        res.status(404).send({"Message":"NO Token Available"})
    }
    else{
        try{
            let decodedData=jwt.verify(token,process.env.SCERETKEY)
        
            next();
        
        }
        
        catch(e){
            res.status(404).send({Message:"Token is not Correct"})
        }
        
    }


}

module.exports={verifyInput,verifyLoginInput,verifytoken}