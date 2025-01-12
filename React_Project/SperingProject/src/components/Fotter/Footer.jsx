import React from 'react';
import logoImage from '../../assets/images/logo.png'
import facebookIcon from '../../assets/images/fb.png'
import twitterIcon from '../../assets/images/twitter.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import instagramIcon from '../../assets/images/instagram.png'
import youtubeIcon from '../../assets/images/youtube.png'
const Footer = () => {
  return (
    <>
    <footer className='w-full flex flex-col items-center border-[3px] border-red-700'>
      <section className='max-w-sm'>
        <div>
          <div>
            <img src={logoImage} alt="Logo-Icon" />
            <h2>Spering</h2>
          </div>
          <div>
            <img src={facebookIcon} alt="Facebook-Icon" />
            <img src={twitterIcon} alt="Twitter-Icon" />
            <img src={linkedinIcon} alt="LinkedIn-Icon" />
            <img src={instagramIcon} alt="Instagram-Icon" />
            <img src={youtubeIcon} alt="Youtube-Icon" />
          </div>
        </div>
      </section>
      <section>copy Write</section>
    </footer>
      
    </>
  )
}

export default Footer
