import React from 'react'
import logoImage from "../../assets/images/logo.png"

const Header = () => {
  return (
    <>
    <div className="w-full bg-slate-800 h-auto text-lime-50  flex justify-between items-center py-3">
         <div className='flex text-center ml-3 md: w-40 bg-indigo-600 '>
            <img className='w-4 h-auto md:w-8 mt-1' src={logoImage} alt="" />
            <h3 className='md:text-2xl font-bold mt-'>Spering</h3>
         </div>
         <div className='w-1/4'>
            <ul className='hidden md:flex justify-between items-center'>
                <li className='list-none text-md font-normal  md: text-lg  text-slate-200 '>Home</li>
                <li className='list-none text-md font-normal  md: text-lg  text-slate-200 '>About</li>
                <li className='list-none text-md font-normal  md: text-lg  text-slate-200 '>Work</li>
                <li className='list-none text-md font-normal  md: text-lg  text-slate-200 '>Category</li>
                <li></li>
            </ul>
         </div>
         <div>login and search button</div>
         <div>exchange button </div>
    </div>
      
    </>
  )
}

export default Header
