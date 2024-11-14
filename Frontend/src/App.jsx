import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Login from './Pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>TODO App</h1>
    <Navbar/>
    <Login/>
   </>
  )
}

export default App
