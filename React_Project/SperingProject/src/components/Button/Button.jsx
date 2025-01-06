import React from 'react';
import './Button.css';

const Button = ({btnText,btnName}) => {
  return (
    <>
    {btnName=="redish"?
        <button className='redishbtn' >{btnText}</button>:
        <button className='blackishbtn' >{btnText}</button>
    }      
    </>
  )
}

export default Button
