import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  const [toggle,setToggle]=useState(false);
  const handleToggle=()=>{
    console.log("Basit is")
    setToggle(!toggle)
  }

  return (
    <>
    <header className='w-full  bg-[#c69c72]  sticky top-0 z-10'>
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
      <button onClick={handleToggle} className='sm:hidden text-3xl text-white border-none outline-none'>
        &#9776;
      </button>
      </section>
      <section className={`absolute top-0 z-50 bg-black w-full flex-col justify-center origin-top animate-open-menu ${toggle?'flex':'hidden'} `}>
      <button
       className='text-5xl self-end px-6 text-white'
       onClick={handleToggle}
      >
        &times;
      </button>
      <nav className='flex flex-col gap-y-10 items-center h-screen justify-center'>
        <Link onClick={handleToggle} className='text-lg sm:text-xl font-semibold text-white uppercase' to='/'>Home</Link>
        <Link onClick={handleToggle} className='text-lg sm:text-xl font-semibold text-white uppercase' to='/about'>About</Link>
        <Link onClick={handleToggle} className='text-lg sm:text-xl font-semibold text-white uppercase' to='/shop'>Shop</Link>
        <Link onClick={handleToggle} className='text-lg sm:text-xl font-semibold text-white uppercase' to='/blog'>Blog</Link>
      </nav>
      </section>
    </header>
      
    </>
  )
}

export default Header
