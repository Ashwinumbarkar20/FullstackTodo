const usersignup=(req,res)=>{
res.status(201).json({Message:`${req.body.username} User Created`})
}

module.exports={usersignup}