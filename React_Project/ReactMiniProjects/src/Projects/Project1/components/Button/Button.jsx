import React from 'react'
import './Button.css'

const Button = ({buttonText,buttonfunction}) => {
  return (
    <>
    <button className='buttonComp' onClick={buttonfunction}>{buttonText}</button>      
    </>
  )
}

export default Button
