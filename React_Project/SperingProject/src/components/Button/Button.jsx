import React from 'react'

const Button1 = ({btnText}) => {
  return (
    <>
        <button className='px-4 py-2 text-md md:m-3 md:px-6 lg:px-10 md:py-2 md:text-lg text-slate-100 bg-red-500 hover:bg-transparent hover:text-red-500 hover:border hover:border-solid hover:border-red-400 '>{btnText}</button>          
    </>
  )
}

const Button2=({btnText,condition})=>{
    return(

    <>
        {
          condition==true?
          <>
          <button className='px-4 mx-2 py-2 text-md mt-4 md:m-3 md:px-10 md:py-2 md:text-lg text-slate-950 bg-slate-50  hover:bg-transparent hover:text-slate-50 hover:border hover:border-solid hover:border-slate-50 sm:mx-5'>{btnText}</button> 
          </>:
          <>
          <button className='px-4 mx-2 py-2 text-md mt-4 md:m-3 md:px-16 md:py-2 md:text-lg text-slate-50 bg-[#1a2e35] hover:bg-transparent hover:text-slate-950 hover:border hover:border-solid hover:border-[#1a2e35] sm:mx-5'>{btnText}</button> 
          </>
        }         
    </>

    )
}
export {Button1,Button2}

