import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo/logo.png'

const Navbar = () => {
  return (
    <>
    <header id='site_header'>
      <div className="container">
        <nav className="navbar" id='Navbar'>
          <div className="navbar_brand">
            <a href="#">
              <img src={Logo}alt="Logo" />
            </a>
          </div>
        </nav>
      </div>

    </header>
    </>
  )
}

export default Navbar
