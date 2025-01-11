import React from 'react'
import logoImage from "../../assets/images/logo.png"
import facebookIcon from '../../assets/images/fb.png'
import twitterIcon from '../../assets/images/twitter.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import instragramIcon from '../../assets/images/intragram.png'
import youtubeIcon from '../../assets/images/youtube.png'
import { Link } from 'react-router-dom'
import { Button1 } from '../Header/Button/Button'


const Footer = () => {
  return (
    <>
    <footer  className='w-full h-screen bg-slate-600'>
    <div className='max-w-[1170px] h-auto flex flex-col '
    
    >
      <div>
        <div>
          <img src={logoImage} alt="" />
          <h2>Spering</h2>
        </div>
        <div>
          <img src={facebookIcon} alt="facebookIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
          <img src={linkedinIcon} alt="linkedinIcon" />
          <img src={instragramIcon} alt="instragramIcon" />
          <img src={youtubeIcon} alt="youtubeIcon" />
        </div>
      </div>
      <div>
        <div>
          <h2>USEFULL LINK</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
            <li><Link to='/category'>Category</Link></li>
          </ul>
        </div>
        <div>
          <h2>OFFICES</h2>
          <p>Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
        </div>
        <div>
          <h2>Information</h2>
          <p>Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
        </div>
        <div>
          <h2>Newsletter</h2>
          <div>
            <input type="text" placeholder='Email' />
          </div>
          <div>
            <Button1 btnText="SUBSCRIBE"/>
          </div>
        </div>
      </div>
      <div>Detail information </div>

    </div>
        
    </footer>      
    </>
  )
}

export default Footer
