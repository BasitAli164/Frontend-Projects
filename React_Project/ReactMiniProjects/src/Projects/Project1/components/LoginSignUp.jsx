import React, { useState } from 'react'
import './LoginSignUp.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonoutlineIcon from '@mui/icons-material/PersonOutline'
import LockOutlineIcon from '@mui/icons-material/LockOutlined'
const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up")
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> :
          <div className="input">
            <PersonoutlineIcon />
            <input type="text" placeholder='userName' />
          </div>}

        <div className="input">
          < MailOutlineIcon />
          <input type="email" placeholder='email' />
        </div>
        <div className="input">
          <LockOutlineIcon />
          <input type="password" placeholder='password' />
        </div>

      </div>
      {action === "Sign Up" ? <div></div> :
        <div className="forgotPassword">Lost Password? <span>Click Here!</span></div>

      }
      <div className="submitContainer">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp
