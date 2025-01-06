import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    
    return (
        <>
            <header id='header'>
                <div className="logoContainer">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h2>Spring</h2>
                    </div>
                </div>
                <div className="menuItems">
                    <div className="menuList">
                        <ul>
                            <li> </li>

                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
