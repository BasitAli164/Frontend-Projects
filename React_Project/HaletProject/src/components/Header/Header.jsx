import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='w-full h-auto bg-[#ABABAB]'>
      <section className='flex justify-between items-center '>
        <div>
          <h1 className=' text-3xl sm:text-5xl text-white font-black'>Healet</h1>
        </div>
      <nav className='hidden sm:flex justify-between items-center'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <div>
        &#9776;
      </div>
      </section>
      <section></section>
    </header>
      
    </>
  )
}

export default Header
