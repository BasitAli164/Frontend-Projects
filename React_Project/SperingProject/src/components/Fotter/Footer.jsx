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
    <footer className='w-full h-[50vh] flex flex-col items-center border-[3px] border-red-700 bg-[#1a2e35]'>
      <section className='w-full sm:max-w-[1170px] bg-red-200 mt-10'>
        <div className='grid grid-rows-2 gap-y-3  sm:grid-cols-2 sm:gap-x-[400px] bg-red-300'>
          <div className='flex justify-center items-center'>
            <img className='w-10 sm:w-20' src={logoImage} alt="Logo-Icon" />
            <h2 className='text-3xl sm:text-4xl font-bold '>Spering</h2>
          </div>
          <div className='flex justify-center items-center gap-x-1 sm:flex-row '>
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-7' src={facebookIcon} alt="Facebook-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-7' src={twitterIcon} alt="Twitter-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-7' src={linkedinIcon} alt="LinkedIn-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-7' src={instagramIcon} alt="Instagram-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-7' src={youtubeIcon} alt="Youtube-Icon" />
          </div>
        </div>
        
      </section>
      <section>copy Write</section>
    </footer>
      
    </>
  )
}

export default Footer
