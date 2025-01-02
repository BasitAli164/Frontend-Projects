import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  //Mobile Menu State 
  const [sideNav,setSideNav]=useState(false);

  //Desktop Fixed Menu
  const [sticky, setSticky]=useState(false);

  const sideNavShow=()=>{
    setSideNav(!sideNav)

  }
  //Scroll Fixed Navbar
  useEffect(()=>{
    const handleScroll=()=>{
      setSticky(window.scrollY>20);
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)
  })
  return (
    <>
      <header id='site_header' className={`${sticky?'sticky':''}`}>
        <div className="container">
          <nav className="navbar" id='Navbar'>
            <div className="navbar_brand">
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="navbar_Toggler" onClick={sideNavShow}>{menuIcon}</div>
            <div className={`menu_items ${sideNav===true?'active':''}`}>
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
                 to="about"
                  spy={true}
                  smooth={true}

                >
                  About Us
                </Link></li>
                <li> <Link
                  to="Services"
                  spy={true}
                  smooth={true}

                >
                  Services
                </Link></li>
                <li> <Link
                  to="blo"
                  spy={true}
                  smooth={true}

                >
                  Blog
                </Link></li>
                <li> <Link
                  to="contact"
                  spy={true}
                  smooth={true}

                >
                  Contact Us
                </Link></li>
               
              </ul>
            </div>
          </nav>
        </div>

      </header>
    </>
  )
}

export default Navbar
