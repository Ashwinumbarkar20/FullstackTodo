import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Signup from './Pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import {jwtDecode} from 'jwt-decode';
//import * as jwtDecode from 'jwt-decode';
import AboutUs from './Pages/AboutUs'
import SignIn from './Pages/SignIn'
import NoPageFound from './Pages/NoPageFound'
import { toast } from 'react-toastify'
function App() {
  const [userDetails, setUserDetails] = useState(null);

const getUser=()=>{
  const currenttoken=localStorage.getItem("token")
  if(currenttoken){
    
    const decodedToken = jwtDecode(currenttoken);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp > currentTime) {
      // Token is valid, set user details in the state
      setUserDetails(decodedToken);
  }
  else{
    localStorage.removeItem('token');
          setUserDetails(null);
          console.warn('Token has expired.');
  }
  }
else{
  setUserDetails(null);
}
}
 
useEffect(()=>{
getUser();
},[])

  return (
   <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path='/SignUP' element={<Signup/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/Home" element={userDetails?<Home/>:<div>Please login first</div>}> </Route>
      <Route path="/*" element={<NoPageFound/>}></Route>
      
    </Routes>
   </>
  )
}

export default App
