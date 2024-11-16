import React from 'react'
import styled from 'styled-components'
export default function Btn({type,title,handleclickfun,disbale=false}) {
  return (
    <>
     <NewButton type={type} onClick={handleclickfun} disabled={disbale}>{title}</NewButton> 
    </>
  )
}
const NewButton =styled.button`
padding:10px;
 background-color:#333366;
 color:#FFFFFF;
 border-radius:10px;
 border:none;
 cursor: pointer;
 display:flex;
 justify-content:center;
 align-items:center;
 transition: all 0.3s ease-in-out ;
 &:hover{
 background-color:#FFFFFF;
 color:#333366;
 border:1px solid #333366;
 box-shadow:0px 0px 6px rgba(51, 51, 102,0.8);
 }
`


