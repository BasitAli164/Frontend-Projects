import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faShoppingBag} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  const userIcon=<FontAwesomeIcon icon={faUser}/>
  const shopingBag=<FontAwesomeIcon icon={faShoppingBag}/>
  const [isHome,setIsHome]=useState(true)
  return (
    <>
    <div className='container  px-10 flex justify-between items-center w-full h-20 bg-black'>
    <div>
        <h1 className='text-white text-2xl font-semibold'><span className='text-orange-400'>Little</span> Fashion</h1>
    </div>
    <div>
      <nav >
        <ul className='flex gap-x-5'>
          <li><Link to='/' className={`${isHome?'text-orange-400 underline decoration-gray-500 decoration-[2px] font-semibold  ':'font-semibold focus:text-orange-400 focus:underline focus:decoration-gray-600 focus:decoration-[2px] hover:text-orange-400 hover:underline hover:decoration-[2px] hover:decoration-gray-500  hover:transition hover:duration-[0.4s]'}`}>Home</Link></li>
          <li><Link to='/story' onClick={()=>setIsHome(false)} className='font-semibold  focus:text-orange-400 focus:underline focus:decoration-gray-600 focus:decoration-[2px] hover:text-orange-400 hover:underline hover:decoration-[2px] hover:decoration-gray-500  hover:transition hover:duration-[0.4s]'>Story</Link></li>
          <li><Link to='/products' onClick={()=>setIsHome(false)} className='font-semibold  focus:text-orange-400 focus:underline focus:decoration-gray-600 focus:decoration-[2px] hover:text-orange-400 hover:underline hover:decoration-[2px] hover:decoration-gray-500  hover:transition hover:duration-[0.4s]'>Products</Link></li>
          <li><Link to='/faqs' onClick={()=>setIsHome(false)} className='font-semibold  focus:text-orange-400 focus:underline focus:decoration-gray-600 focus:decoration-[2px] hover:text-orange-400 hover:underline hover:decoration-[2px] hover:decoration-gray-500  hover:transition hover:duration-[0.4s]'>FAQs</Link></li>
          <li><Link to='/contact' onClick={()=>setIsHome(false)} className='font-semibold  focus:text-orange-400 focus:underline focus:decoration-gray-600 focus:decoration-[2px] hover:text-orange-400 hover:underline hover:decoration-[2px] hover:decoration-gray-500  hover:transition hover:duration-[0.4s]'>Contact</Link></li>
        </ul>
      </nav>

    </div>
    <div className='flex gap-x-5'>
      <div className='hover:text-orange-400 cursor-pointer'>{userIcon}</div>
      <div className='hover:text-orange-400 cursor-pointer'>{shopingBag}</div>
    </div>
      
    </div>
    </>
  )
}

export default Header
