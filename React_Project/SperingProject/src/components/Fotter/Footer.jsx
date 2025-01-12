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
    <footer className='w-full flex flex-col items-center border-[3px] border-red-700 bg-[#1a2e35]'>
      <section className='w-full   flex flex-col justify-center gap-16 sm:max-w-[90%] xl:max-w-[90%] bg-red-200 mt-10'>
        <div className='flex flex-col sm:flex-row gap-3 justify-between items-center '>
          <div className='flex justify-center items-center gap-2'>
            <img className='w-10 sm:w-14 xl:w-14' src={logoImage} alt="Logo-Icon" />
            <h2 className='text-2xl sm:text-3xl font-bold xl:text-5xl'>Spering</h2>
          </div>
          <div className='flex justify-center items-center gap-x-1 sm:flex-row '>
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 ' src={facebookIcon} alt="Facebook-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 ' src={twitterIcon} alt="Twitter-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 ' src={linkedinIcon} alt="LinkedIn-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 ' src={instagramIcon} alt="Instagram-Icon" />
            <img className='mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 ' src={youtubeIcon} alt="Youtube-Icon" />
          </div>
        </div>
        <div className='grid grid-rows-4 text-center gap-3 sm:grid-cols-4 bg-blue-600 sm:h-[40vh] '>
          <div className='bg-red-400'>
            <h2 className='text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl'>Useful Link</h2>
            <ul>
              <li className='text-lg sm:text-sm md:text-lg xl:text-xl'>
                <Link to='/'>Home</Link>
              </li>
              <li className='text-lg sm:text-sm md:text-lg xl:text-xl'>
                <Link to='/about'>About</Link>
              </li>
              <li className='text-lg sm:text-sm md:text-lg xl:text-xl'>
                <Link to='/work'>Work</Link>
              </li>
              <li className='text-lg sm:text-sm md:text-lg xl:text-xl'>
                <Link to='/category'>Category</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl'>Office</h2>
            <p className='text-lg text-center sm:text-justify sm:text-[12px] md:text-[15px] lg:text-lg'>Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
          </div>
          <div>
          <h2 className='text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl'>Information</h2>
          <p className='text-lg text-center sm:text-justify sm:text-[12px] md:text-[15px] lg:text-lg'>Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
          </div>
          <div className='flex flex-col gap-y-4 sm:gap-2'>
          <h2 className='text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl'>Newsletter</h2>
          <div>
            <input className='w-[80%] p-2 sm:p-1 xl:p-2 xl:w-[95%] xl:placeholder:text-xl' type="text" placeholder='Email' />
          </div>
          <div className='mb-4'>
          <Button1 btnText="SUBSCRIBE"/>

          </div>
          </div>

        </div>
        <div></div>
      </section>
      <section className='w-full  text-center p-4 bg-white'>
        <p className='text-md sm:text-xl text-slate-900  tracking-wider '>© 2025 All Rights Reserved By Free Html Templates</p>
      </section>
    </footer>
      
    </>
  )
}

export default Footer

