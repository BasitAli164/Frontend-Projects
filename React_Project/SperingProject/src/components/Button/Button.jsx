import React from 'react'

const Button1 = ({btnText}) => {
  return (
    <>
        <button className=' px-10 py-2 text-lg text-slate-100 bg-red-500 
        hover:bg-transparent hover:text-red-500 hover:border hover:border-solid hover:border-red-400'>{btnText}</button>          
    </>
  )
}

const Button2=({btnText})=>{
    return(

    <>
        <button className=' px-10 py-2 text-lg text-slate-950 bg-slate-50 
        hover:bg-transparent hover:text-slate-50 hover:border hover:border-solid hover:border-slate-50'>{btnText}</button>          
    </>

    )
}
export {Button1,Button2}

