import React, { useState } from 'react'
import TextField from '../Component/TextField'
import Btn from '../Component/Btn'
import { useNavigate } from 'react-router-dom'
import AllServices from '../Service/AllServices';
import{toast,ToastContainer} from 'react-toastify'



export default function SignIn() {
  const navigate=useNavigate();

  const initialdata={
email:"",
password:""
  }

  const [loginData,setLoginData]=useState(initialdata)

const handleChange=(e)=>{
const {name,value}=e.target
setLoginData((prev)=>({...prev,[name]:value}))
}
const handleLogin=async(e)=>{
e.preventDefault();
try{
  const res=await AllServices.Login(loginData)
console.log("response is ",res)
if(res.status===200)
{
  const token=res.data.token;
  console.log(token)
  localStorage.setItem("token",JSON.stringify(token))
  navigate("/home")
}
else if(res.status===404){
  toast.error("User Not Found, please do Signup")
}

}
catch(e){
  console.log(e.response.status===404 && e.response.data.message==="User not found")
  toast.error("User Not Found, please Register first")
  setLoginData(initialdata)
}
}
  return (
    <>
     <div>
<div>Welcome ToDo APP</div>
<div><h3>Login</h3>
<form >
<TextField name={"email"} type="text" title={"Email"} onchange={handleChange} value={loginData.email} placeholder="JohnDoe@xyz.com"/>
<TextField name={"password"} type="password" title={"Password"} onchange={handleChange} value={loginData.password} placeholder=""/>
  <Btn type="submit" 
          title={"Login"}
          handleclickfun={handleLogin} 
          disbale={false} 
/>

</form></div>


     </div> 
     <ToastContainer/>
    </>
  )
}
