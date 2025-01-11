import React from 'react';
import logoImage from "../../assets/images/logo.png"
import facebookIcon from '../../assets/images/fb.png';
import twitterIcon from '../../assets/images/twitter.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import instragramIcon from '../../assets/images/instagram.png';
import youtubeIcon from '../../assets/images/youtube.png';
import locationIcon from '../../assets/images/location.png';
import mailIcon from '../../assets/images/mail.png';
import callIcon from '../../assets/images/call.png';
import { Link } from 'react-router-dom';
import { Button1 } from '../Header/Button/Button';


const Footer = () => {
  return (
    <>
    <footer  className='flex flex-col justify-center items-center bg-[#1a2e35]'>
    <div className='w-full sm:w-[1170px] h-auto  border-4 border-slate-900 mt-40'>
      <div className='grid grid-rows-2 grid-flow-col sm:grid-cols-2 sm:gap-[50%]'>
        <div className='flex justify-center items-center cursor-pointer'>
          <img className='w-10 my-8 sm:w-[12%]' src={logoImage} alt="Logo-Icon" />
          <h2 className='text-[30px] font-bold'>Spering</h2>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <img className='w-10 sm-w-[5%] cursor-pointer' src={facebookIcon} alt="facebook-Icon" />
          <img className='w-10 sm-w-[5%] cursor-pointer' src={twitterIcon} alt="twitter-Icon" />
          <img className='w-10 sm-w-[5%] cursor-pointer' src={linkedinIcon} alt="linkedin-Icon" />
          <img className='w-10 sm-w-[5%] cursor-pointer' src={instragramIcon} alt="instragram-Icon" />
          <img className='w-10 sm-w-[5%] cursor-pointer' src={youtubeIcon} alt="youtube-Icon" />
        </div>
      </div>
      <div className='grid grid-rows-4 sm:grid-cols-4 sm:p-5'>
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
      <div>
        <div>
          <img src={locationIcon} alt="Location-Icon" />
          <span>Location </span>

          </div>  
          <div>
          <img src={mailIcon} alt="Mail-Icon" />
          <span>demo@gmail.components </span>
          
          </div> 
          <div>
          <img src={callIcon} alt="Call-Icon" />
          <span> Call +011234567890 </span>
          
          </div>   
       </div>

    </div>
    <div>
      <p>© 2025 All Rights Reserved By Free Html Templates</p>
    </div>

        
    </footer>      
    </>
  )
}

export default Footer
