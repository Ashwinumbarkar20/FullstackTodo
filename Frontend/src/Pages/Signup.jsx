import React, { useState } from 'react'
import styled from 'styled-components';
import TextField from '../Component/TextField';
import Btn from '../Component/Btn';
export default function Signup() {
    const[loginData,setLoginData]=useState({
username:"",
email:"",
password:""
    })
    const hadlesubmit=()=>{

    }
  return (
    <div>
      <LoginForm onSubmit={hadlesubmit}>
    <h3>Create User</h3>
    <TextField type="text" title="Enter Name" onchange={""} value={""}  placeholder={"e.g. John Doe"}> </TextField>
    <TextField type="text" title="Enter Email_id" onchange={""} value={""}  placeholder={"e.g. JohnDoe@xyz.com"}> </TextField>
    <TextField type="Password" title="Enter Password" onchange={""} value={""}  placeholder={"e.g. John Doe"}> </TextField>
    <Btn type="Submit" title="Create User" handleclickfun={"handlesubmit"} disbale={false} />
  
    
      </LoginForm>
    </div>
  )
}
const LoginForm=styled.form`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:300px;
width:500px;
padding:5px;
box-shadow:2px 2px 4px 4px rgba(0,0,0,0.5);

.Login-Component{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
    input{
        border:none;
         width:90%;
         padding:5px;
          border-bottom:1px solid black;
          margin-bottom:10px;        
         outline:none
    }
    label{
        border:none;
        width:90%;
        margin-bottom:10px;
    }
  
}
button{
        padding:10px;
background-color:#333366;
color:#FFFFFF;
border-radius:10px;
border:none;
cursor: pointer;
transition: all 0.3s ease-in-out ;
&:hover{
    background-color:#FFFFFF;
color:#333366;

border:1px solid #333366;
}
    }
`