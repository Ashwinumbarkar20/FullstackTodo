import React, { useState } from 'react'
import Btn from './Btn'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    const[isLoggedin,setisLoggedin]=useState(false)
   
    return(
        <NavbarWrapper>
<h4>Todo App</h4>
<ul>
<li ><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/AllTodos">All-Todtos</NavLink></li>
<li><NavLink to="/AboutUS">AboutUs</NavLink></li>
</ul>
{
    isLoggedin?(<Btn title={"Logout"} />):(<Btn title={"Login"} />)
}
        </NavbarWrapper>
    )
}
const NavbarWrapper=styled.nav`
display:flex;
height:50px;
justify-content:space-between;
align-items:center;
padding:0px 5px;
box-shadow:2px 2px  4px rgba(0,0,0,0.4);
ul{
    display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
list-style:none;
margin:0px;
padding:0px;
li{
    a{
        border-radius:5px;
        text-decoration:none;
        cursor: pointer;
   color:#333366;
   font-weight:500; 
   padding:5px;
   transition:all 0.3s ease-in-out;
    &:hover{
        background-color:#333366;
        color:#FFFFFF;
        
    }
   
    }
   
    a.active{
        padding:5px;
        background-color:#333366;
        color:#FFFFFF;
    }
}
}
`

