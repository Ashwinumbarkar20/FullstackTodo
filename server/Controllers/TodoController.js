const getAlltodo=(req,res)=>{
res.status(200).send({message:"getting all todos"})
}
module.exports={getAlltodo};