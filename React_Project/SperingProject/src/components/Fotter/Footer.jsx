import React from 'react'
import logoImage from "../../assets/images/logo.png"


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
      <div>More Information </div>
      <div>Detail information </div>

    </div>
        
    </footer>      
    </>
  )
}

export default Footer
