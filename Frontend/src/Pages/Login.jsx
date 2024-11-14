import React, { useState } from 'react'
import styled from 'styled-components';
export default function Login() {
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
    <div className='Login-Component'>
        <label htmlFor=""> Enter  Name 
        </label>
        <input type="text" placeholder='John Doe' />
    </div>
    <div  className='Login-Component'>
        <label htmlFor=""> Enter Email
            
        </label>
        <input type="text" placeholder='John_Doe@xyz.com' />
    </div>
    <div  className='Login-Component'>
        <label htmlFor=""> Enter Password
            
        </label>
        <input type="text" placeholder='Password' />
    </div>
    <button type='submit'>Create User</button>
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
          border-bottom:1px solid black;
          margin-bottom:10px;        
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