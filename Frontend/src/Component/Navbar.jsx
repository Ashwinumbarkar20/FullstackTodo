import React, { useState } from 'react'
import Btn from './Btn'

export default function Navbar() {
    const[isLoggedin,setisLoggedin]=useState(false)
    const handleLogin=()=>{
        console.log("Check user loged in or not ")
        setisLoggedin(true)
    }
    return(
        <>
<h3>Todo App</h3>
<p>Home</p>
{
    isLoggedin?(<Btn title={"Logout"} handleLogin={handleLogin}/>):(<Btn title={"Login"} handleLogin={handleLogin}/>)
}

        </>
    )
}


