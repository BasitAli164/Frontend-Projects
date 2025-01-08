import React from 'react'
import logoImage from "../../assets/images/logo.png"
import serachIcon from '../../assets/images/search-icon.png'
import menuIcon from '../../assets/images/menu.png'
import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='w-full bg-slate-400 h-auto flex justify-between items-center'>
        <div>
            <div className='flex justify-center items-center'>
                <img className='w-12' src={logoImage} alt="Logo-Image" />
                <h3 className='text-slate-100 text-sm md:text-lg font-bold'>Spering</h3>
                </div>
        </div>
        <div>
            <ul className='hidden sm:flex'>
                <li className='mx-1 text-slate-200 text-[16px] md:mx-5'><Link  className="md:text-xl"to='/'>Home</Link></li>
                <li className='mx-1 text-slate-200 text-[16px] md:mx-5'><Link  className="md:text-xl"to='/about'>About</Link></li>
                <li className='mx-1 text-slate-200 text-[16px] md:mx-5'><Link  className="md:text-xl"to='/work'>Work</Link></li>
                <li className='mx-1 text-slate-200 text-[16px] md:mx-5' ><Link className="md:text-xl" to="/category">Category</Link></li>
            </ul>
        </div>
        <div>
            <div><button>Login</button></div>
            <div><img src={serachIcon} alt="SearchIcon" /></div>
        </div>
        <div>
            <div><img src={menuIcon} alt="menuIcon" /></div>
            <div><span>X</span></div>
        </div>
    </div>
    </>
  )
}

export default Header
