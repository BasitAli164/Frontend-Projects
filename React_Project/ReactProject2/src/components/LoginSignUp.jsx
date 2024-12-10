import React from 'react'
import './LoginSignUp.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonoutlineIcon from '@mui/icons-material/PersonOutline'
import LockOutlineIcon from '@mui/icons-material/LockOutlined'
const LoginSignUp = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">SignUp</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
        <div className="input">
          <PersonoutlineIcon/>
            <input type="text" />
        </div>
        <div className="input">
          <MailOutlineIcon/>
            <input type="email" />
        </div>
        <div className="input">
          <LockOutlineIcon/>
            <input type="password" />
        </div>
       
      </div>
      <div className="submitContainer">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp
