const todos=require('../Model/TodoModel')


const getAlltodo=async(req,res)=>{
   //console.log(todos.insertMany(sample)) 
const alltodos=await todos.find();
if(alltodos.length>0)
{
    res.status(200).send({data:alltodos,success:true,Messages:"Fetched all todos"})
}
else
    {
        res.status(400).send({success:false,Messages:"No data"})
    }
}

const Addtodo=async (req,res)=>{
    try {
        
        const newTodo = await todos.create(req.body);
    
       if(newTodo){
        res.status(201).json({ Message: "Todo created successfully", newTodo });
       }
        else{
            res.status(500).json({ Message: "Error creating todo" });
        }
      } catch (error) {
        
        res.status(500).json({ Message: "Error creating todo", error });
      }
}

const Editsingletodo=async(req,res)=>{
    console.log(req.body)
    if(req.body.id){
        const updatedtodo=await todos.findByIdAndUpdate(req.body.id,{...req.body},{new:true})
        if(updatedtodo){
            res.status(200).send({success:true,data:updatedtodo,Message:"Todo is updated"})
        }
        else{
            res.status(400).send({Message:"Id is required"})
        }
    }
    else{
        res.status(400).send({Message:"Id is required"})
    }
    
}

const DeleteTodo=async(req,res)=>{
    try {
        if (req.body.id) {
         
          const Deletedtodo = await todos.findByIdAndDelete(req.body.id);
    
          if (Deletedtodo) {
           
            res.status(200).send({ success: true, data: Deletedtodo, Message: "Todo Deleted" });
          } else {
           
            res.status(404).send({ Message: "Todo not found" });
          }
        } else {
        
          res.status(400).send({ Message: "Id is required" });
        }
      } catch (error) {
        
        res.status(500).send({ Message: "Error deleting todo", error });
      }
    
}

module.exports={getAlltodo,Editsingletodo,Addtodo,DeleteTodo};