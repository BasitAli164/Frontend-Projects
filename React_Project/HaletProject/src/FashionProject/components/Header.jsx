import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='flex justify-evenly items-center w-full h-20 bg-black'>
    <div>
        <h1 className='text-white text-2xl font-semibold'><span className='text-orange-500'>Little</span> Fashion</h1>
    </div>
    <div>
      <nav >
        <ul className='flex gap-x-5'>
          <li><Link to='/' className=' font-semibold focus:text-orange-500 focus:underline focus:decoration-gray-600 focus:decoration-[2px]'>Home</Link></li>
          <li><Link to='/story' className='font-semibold  focus:text-orange-500 focus:underline focus:decoration-gray-600 focus:decoration-[2px]'>Story</Link></li>
          <li><Link to='/products' className='font-semibold  focus:text-orange-500 focus:underline focus:decoration-gray-600 focus:decoration-[2px]'>Products</Link></li>
          <li><Link to='/faqs' className='font-semibold  focus:text-orange-500 focus:underline focus:decoration-gray-600 focus:decoration-[2px]'>FAQs</Link></li>
          <li><Link to='/contact' className='font-semibold  focus:text-orange-500 focus:underline focus:decoration-gray-600 focus:decoration-[2px] hover:text-orange-500 hover:underline hover:decoration-[2px] hover:decoration-gray-500  hover:transition hover:duration-[0.4s]'>Contact</Link></li>
        </ul>
      </nav>

    </div>
    <div></div>
      
    </div>
    </>
  )
}

export default Header
