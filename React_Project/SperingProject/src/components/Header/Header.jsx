import React, { useState } from 'react'
import logoImage from "../../assets/images/logo.png"
import serachIcon from '../../assets/images/search-icon.png'
import menuIcon from '../../assets/images/menu.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const handleChanges = () => {
        setToggle(!toggle)

    }
    return (
        <div className='bg-indigo-300'>
            <div className='w-full h-auto flex justify-between items-center'>
                <div>
                    <div className='ml-10 flex justify-center items-center'>
                        <img className='w-6 sm:w-8 py-2' src={logoImage} alt="Logo-Image" />
                        <h3 className='text-slate-100 text-sm sm:text-lg font-bold'>Spering</h3>
                    </div>
                </div>
                {
                    toggle == false ?
                        <>
                            <div>
                                <ul className='hidden sm:flex'>
                                    <li className='mx-1 text-slate-200 text-[16px] md:mx-4'><Link className="md:text-lg" to='/'>Home</Link></li>
                                    <li className='mx-1 text-slate-200 text-[16px] md:mx-4'><Link className="md:text-lg" to='/about'>About</Link></li>
                                    <li className='mx-1 text-slate-200 text-[16px] md:mx-4'><Link className="md:text-lg" to='/work'>Work</Link></li>
                                    <li className='mx-1 text-slate-200 text-[16px] md:mx-4' ><Link className="md:text-lg" to="/category">Category</Link></li>
                                </ul>
                            </div>
                            <div className='hidden sm:flex ml-42 space-x-5 xl: ml-40 space-x-10'>
                                <div><button className='text-lg text-slate-100 bg-transparent  '>Login</button></div>
                                <div><img className='sm:mt-2 ' src={serachIcon} alt="SearchIcon" /></div>
                            </div>
                        </> :
                        <></>
                }
                <div className='mr-5'>
                    {
                        toggle == true ?
                            <div>
                                <img className='' onClick={handleChanges} src={menuIcon} alt="menuIcon" />
                            </div>
                            :
                            <div>
                                <span className='hidden sm:block text-3xl text-slate-100 font-bold cursor-default' onClick={handleChanges}>X</span>
                                <img className='sm:hidden' onClick={handleChanges} src={menuIcon} alt="menuIcon" />

                            </div>

                    }
                </div>
            </div>
            {
                toggle == true ?
                    <>

                        <ul className='flex flex-col justify-center items-center bg-slate-500 sm:hidden'>
                            <li className='my-2 text-slate-100 font-semibold text-[16px] '>
                                <Link className="md:text-lg" to='/'>Home</Link>
                            </li>
                            <li className='my-2 text-slate-100 font-semibold text-[16px] '>
                                <Link className="md:text-lg" to='/about'>About</Link>
                            </li>
                            <li className='my-2 text-slate-100 font-semibold text-[16px] '>
                                <Link className="md:text-lg" to='/work'>Work</Link>
                            </li>
                            <li className='my-2 text-slate-100 font-semibold text-[16px] ' >
                                <Link className="md:text-lg" to="/category">Category</Link>
                            </li>
                        </ul>


                    </> :
                    ""
            }
        </div>
    )
}

export default Header
