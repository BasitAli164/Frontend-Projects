import React from 'react'
import logoImage from "../../assets/images/logo.png"
import serachIcon from '../../assets/images/search-icon.png'

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
            </ul>
         </div>
         <div className='w-50 bg-slate-500 md: flex justify-center items-center   '>
            <button>Login</button>
            <img src={serachIcon} alt="" />
         </div>
         <div>exchange button </div>
    </div>
      
    </>
  )
}

export default Header
