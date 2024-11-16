import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import TextField from '../Component/TextField'
import Btn from '../Component/Btn'
import { IoMdAdd } from "react-icons/io";

import styled from 'styled-components';
import AllServices from '../Service/AllServices';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const initalData={ title:"",
    desc:"",
    isCompleted:false}
  const [newTodo,setNewTodo]=useState(initalData)

  const handleChange=(e)=>{
const{name,value}=e.target;
setNewTodo(Prev=>({...Prev,[name]:value}))
  }

  const handleAddTodo=async (e)=>{
  
    e.preventDefault();
const data= await AllServices.AddTodo(newTodo)
if(data.status===201){
  toast.success("Todo has been Added")
  setNewTodo(initalData)
}

  }
  return (
    <>
  
    in home page
  <br/>
  <br/>
  
  
     <AddTodoWrapper >
      <TextField name={"title"} type="text" title={"Enter Title "} onchange={handleChange} value={newTodo.title} placeholder="Enter your Title here"/>
      <TextField name={"desc"} type="text" title={"Enter Task/Todo "} onchange={handleChange} value={newTodo.desc} placeholder="Enter your Task here"/>
      <Btn
          type="submit" // Ensures it triggers the form submission
          title={<IoMdAdd />}
          handleclickfun={handleAddTodo} // No need for arrow function here
          disbale={false} // Corrected "disable" spelling
        />

     </AddTodoWrapper>
    
    <ToastContainer/>
    
        </>
  )
}
const AddTodoWrapper=styled.form`
width:80%;
display:flex;
justify-content:center;
align-items:center;
flex-direction: row;
gap:10px;
padding:10px;
box-shadow:2px 2px  4px rgba(0,0,0,0.4);
margin:auto;
`