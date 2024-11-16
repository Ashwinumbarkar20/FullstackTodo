import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Signup from './Pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import SignIn from './Pages/SignIn'
import NoPageFound from './Pages/NoPageFound'
function App() {


  return (
   <>
   <Navbar></Navbar>
    <Routes>
      <Route path="/" element=<Home/>/>
      <Route path='/SignUP' element=<Signup/>></Route>
      <Route path="/AboutUs" element=<AboutUs/>></Route>
      <Route path="/SignIn" element=<SignIn/>> </Route>
      <Route path="/*" element=<NoPageFound/>></Route>
      
    </Routes>
   </>
  )
}

export default App
