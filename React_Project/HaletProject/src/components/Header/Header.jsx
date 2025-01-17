import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='w-full  bg-[#c69c72] '>
      <section className='flex justify-between sm:justify-around items-center  h-20'>
        <div>
          <h1 className=' text-2xl sm:text-3xl text-white font-semibold uppercase'>Healet</h1>
        </div>
      <nav className='hidden sm:flex gap-x-5'>
        <Link className='text-lg sm:text-xl font-semibold text-white uppercase' to='/'>Home</Link>
        <Link className='text-lg sm:text-xl font-semibold text-white uppercase' to='/about'>About</Link>
        <Link className='text-lg sm:text-xl font-semibold text-white uppercase' to='/shop'>Shop</Link>
        <Link className='text-lg sm:text-xl font-semibold text-white uppercase' to='/blog'>Blog</Link>
      </nav>
      <div className='sm:hidden text-3xl text-white'>
        &#9776;
      </div>
      </section>
      <section>
        
      </section>
    </header>
      
    </>
  )
}

export default Header
