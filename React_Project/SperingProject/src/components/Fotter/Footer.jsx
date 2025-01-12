import logoImage from '../../assets/images/logo.png'
import facebookIcon from '../../assets/images/fb.png'
import twitterIcon from '../../assets/images/twitter.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import instagramIcon from '../../assets/images/instagram.png'
import youtubeIcon from '../../assets/images/youtube.png'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <footer className='w-full h-[50vh] flex flex-col items-center border-[3px] border-red-700 bg-[#1a2e35]'>
      <section className='w-full sm:max-w-[1170px] bg-red-200 mt-10'>
        <div className='flex flex-col sm:flex-row gap-3 justify-between items-center bg-red-300'>
          <div className='flex justify-center items-center bg-red-700'>
            <img className='w-10 sm:w-14' src={logoImage} alt="Logo-Icon" />
            <h2 className='text-2xl sm:text-3xl font-bold '>Spering</h2>
          </div>
          <div className='flex justify-center items-center gap-x-1 sm:flex-row bg-blue-600'>
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-11' src={facebookIcon} alt="Facebook-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-11' src={twitterIcon} alt="Twitter-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-11' src={linkedinIcon} alt="LinkedIn-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-11' src={instagramIcon} alt="Instagram-Icon" />
            <img className='mx-1 w-6 cursor-pointer sm:mx-4 sm:w-11' src={youtubeIcon} alt="Youtube-Icon" />
          </div>
        </div>
        <div className='grid grid-rows-4 text-center gap-3 sm:grid-cols-4'>
          <div>
            <h2>Useful Link</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/work'>Work</Link>
              </li>
              <li>
                <Link to='/category'>Category</Link>
              </li>
            </ul>
          </div>
          <div>Office</div>
          <div>Information</div>
          <div>NewsLetter</div>
        </div>
      </section>
      <section>copy Write</section>
    </footer>
      
    </>
  )
}

export default Footer

