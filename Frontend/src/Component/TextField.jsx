import React from 'react'
import styled from 'styled-components'
export default function TextField({type,title,onchange,value,placeholder}) {
  return (
    
        <TextFieldComponent className='Login-Component'>
        <label htmlFor=""> {title}
        </label>
        <input type={type} onChange={onchange} value={value} placeholder={placeholder} />
    </TextFieldComponent>
    
  )
}
const TextFieldComponent=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
    input{
        border:none;
         width:90%;
         padding:5px;
          border-bottom:1px solid black;
          margin-bottom:10px;        
         outline:none
    }
    label{
        border:none;
        width:90%;
        margin-bottom:10px;
    }
`
