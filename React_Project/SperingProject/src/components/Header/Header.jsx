import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import searchIcon from "../../assets/images/search-icon.png"
import menuIcon from '../../assets/images/menu.png'
import { Link } from 'react-scroll'
const Header = () => {
    const [toggle, setToggle] = useState(true);
    const [width, setWidth]=useState(window.innerWidth)
    useEffect(()=>{
        setWidth(width)
        if(width < 767){
            setToggle(!toggle)
        }
        

    },[width])
    
    
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

                                        >
                                            Home
                                        </Link></li>
                                        <li> <Link
                                            to="home"
                                            spy={true}
                                            smooth={true}

                                        >
                                            About
                                        </Link></li>
                                        <li> <Link
                                            to="home"
                                            spy={true}
                                            smooth={true}

                                        >
                                            Work
                                        </Link></li>
                                        <li> <Link
                                            to="home"
                                            spy={true}
                                            smooth={true}

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
                                
                                toggle === false || width<767 ?

                                <img onClick={togglingFunction} src={menuIcon} alt="" />:
                                    <li className='xIcon' onClick={togglingFunction} >X</li> 
                                }
                            </div>


            </header>

        </>
    )
}

export default Header
