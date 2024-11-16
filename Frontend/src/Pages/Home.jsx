import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import TextField from '../Component/TextField'
import Btn from '../Component/Btn'
import { IoMdAdd } from "react-icons/io";
import styled from 'styled-components';
export default function Home() {
  const [newTodo,setNewTodo]=useState("")

  const handleChange=(e)=>{
setNewTodo(e.target.value)
  }
  const handleAddTodo=()=>{
    
  }
  return (
    <>
  <br/>
  <br/>

     <AddTodoWrapper onSubmit={""}>
      <TextField type="text" title={"Enter Task here"} onchange={handleChange} value={newTodo} placeholder="Enter your Task here"/>
      <Btn type="submit" title={<IoMdAdd/>} disbale="false"/>
     
     </AddTodoWrapper>
    
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