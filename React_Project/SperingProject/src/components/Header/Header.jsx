import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import searchIcon from "../../assets/images/search-icon.png"
import menuIcon from '../../assets/images/menu.png'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate();
    const [toggle, setToggle] = useState(true);    
    const togglingFunction = () => {
        setToggle(!toggle)
       
    }

    return (
        <>
            <header id='header'>
                <div className="logoContainer">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h2>Spring</h2>
                    </div>
                </div>
                <div className="toggler">
                    {
                        toggle == true ?
                            <div className='menuItems'>

                                <div className="menuList">
                                    <ul>
                                        <li> <Link
                                            activeClass="active"
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            onClick={()=>navigate('/')}

                                        >
                                            Home
                                        </Link></li>
                                        <li> <Link
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            onClick={()=>navigate('/about')}
                                            
                                            >
                                            About
                                        </Link></li>
                                        <li> <Link
                                            to="work"
                                            spy={true}
                                            smooth={true}
                                            onClick={()=>navigate('/work')}

                                        >
                                            Work
                                        </Link></li>
                                        <li> <Link
                                            to="category"
                                            spy={true}
                                            smooth={true}
                                            onClick={()=>navigate('/category')}


                                        >
                                            Category
                                        </Link></li>

                                    </ul>
                                </div>
                                <div className="menuIcons">
                                    <ul>
                                        <li><span>Login</span></li>
                                        <li><img src={searchIcon} alt="Search" /></li>

                                    </ul>
                                </div>

                            </div>
                            :
                           <></>
                    }
                    
                </div>
                <div className='menu'>
                                {
                                
                                toggle === true ?

                                    <li className='xIcon' onClick={togglingFunction} >X</li> :
                                    <img onClick={togglingFunction} src={menuIcon} alt="" />
                                }
                            </div>


            </header>

        </>
    )
}

export default Header
