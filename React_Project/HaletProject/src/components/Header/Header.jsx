import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <section >
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

      </ul>
    </section>
      
    </>
  )
}

export default Header
