const express =require ("express")
const cors=require("cors")
const dotnev=require("dotenv")
const  mongoose = require('mongoose');
const UserAuth =require("./Routes/UserAuth")
dotnev.config();
const app=express();
app.use(express.json());
const port = process.env.PORT || 5000;
router.use("/UserAuth",UserAuth)
router.use("/GetTodos") 
mongoose.connect(process.env.DBURI,()=>{
    console.log("Connecte to DB")
    app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
})

