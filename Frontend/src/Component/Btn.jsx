import React from 'react'

export default function Btn({title,handleLogin}) {
  return (
    <>
     <button onClick={handleLogin}>{title}</button> 
    </>
  )
}
