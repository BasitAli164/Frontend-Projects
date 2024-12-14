import React from 'react'
import './Button.css'

const Button = ({buttonText,buttonfunction}) => {
  return (
    <>
    <button onClick={buttonfunction}>{buttonText}</button>      
    </>
  )
}

export default Button
