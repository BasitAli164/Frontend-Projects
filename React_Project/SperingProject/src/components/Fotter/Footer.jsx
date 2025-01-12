import logoImage from '../../assets/images/logo.png'
import facebookIcon from '../../assets/images/fb.png'
import twitterIcon from '../../assets/images/twitter.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import instagramIcon from '../../assets/images/instagram.png'
import youtubeIcon from '../../assets/images/youtube.png'
import {Link} from 'react-router-dom';
import { Button1 } from '../Header/Button/Button'
const Footer = () => {
  return (
    <>
    <footer className='w-full h-[100vh] flex flex-col items-center border-[3px] border-red-700 bg-[#1a2e35]'>
      <section className='w-full flex flex-col justify-center gap-20 sm:max-w-[90%] xl:max-w-[90%] bg-red-200 mt-10'>
        <div className='flex flex-col sm:flex-row gap-3 justify-between items-center '>
          <div className='flex justify-center items-center gap-2'>
            <img className='w-10 sm:w-14 xl:w-20' src={logoImage} alt="Logo-Icon" />
            <h2 className='text-2xl sm:text-3xl font-bold xl:text-6xl'>Spering</h2>
          </div>
          <div className='flex justify-center items-center gap-x-1 sm:flex-row '>
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-14 ' src={facebookIcon} alt="Facebook-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-14 ' src={twitterIcon} alt="Twitter-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-14 ' src={linkedinIcon} alt="LinkedIn-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-14 ' src={instagramIcon} alt="Instagram-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-14 ' src={youtubeIcon} alt="Youtube-Icon" />
          </div>
        </div>
        <div className='grid grid-rows-4 text-center gap-3 sm:grid-cols-4'>
          <div>
            <h2 className='text-2xl font-bold uppercase tracking-wider xl:text-4xl'>Useful Link</h2>
            <ul>
              <li className='text-lg xl:text-3xl'>
                <Link to='/'>Home</Link>
              </li>
              <li className='text-lg xl:text-3xl'>
                <Link to='/about'>About</Link>
              </li>
              <li className='text-lg xl:text-3xl'>
                <Link to='/work'>Work</Link>
              </li>
              <li className='text-lg xl:text-3xl'>
                <Link to='/category'>Category</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-2xl font-bold uppercase tracking-wider xl:text-4xl'>Office</h2>
            <p className='text-lg text-center sm:text-justify sm:text-xl'>Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
          </div>
          <div>
          <h2 className='text-2xl font-bold uppercase tracking-wider xl:text-4xl'>Information</h2>
          <p className='text-lg text-center sm:text-justify sm:text-xl'>Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
          </div>
          <div>
          <h2 className='text-2xl font-bold uppercase tracking-wider xl:text-4xl'>Newsletter</h2>
          <div>
            <input className='w-[80%] p-4' type="text" placeholder='Email' />
          </div>
          <Button1 btnText="SUBSCRIBE"/>

          </div>

        </div>
      </section>
      <section className='w-full text-center p-6 bg-white'>
        <p className='text-md sm:text-2xl text-black  tracking-wider '>© 2025 All Rights Reserved By Free Html Templates</p>
      </section>
    </footer>
      
    </>
  )
}

export default Footer

