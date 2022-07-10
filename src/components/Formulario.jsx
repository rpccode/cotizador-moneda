import styled from '@emotion/styled'
import React from 'react'

const InputSubmit= styled.input`
    background-color: #9497FF;
    border:none;
    width: 100%; 
    padding:10PX;
    color:#FFF;
    font-weight:700;
    text-transform:uppercase;
    font-size: 20px;
    border-radius: 5px; 
    transition: background-color .3s ease;
    &:hover{
        background-color:#7a7dff;
        cursor: pointer;
    }


`;
const Formulario = () => {
  return ( 
    <form>
        <InputSubmit 
            type='submit'
            value='Cotizar'
         />
    </form>
  )
}

export default Formulario