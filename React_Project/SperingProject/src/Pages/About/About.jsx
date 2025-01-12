import React from 'react'
import { Button1, Button2 } from '../../components/Button/Button'
import experienceImage from '../../assets/images/experience-img.jpg'
import aboutImage from '../../assets/images/about-img.jpg'

const About = () => {
  return (
    <>
    <section className='bg-white w-full ] '>
      <div className='w-full h-screen flex flex-col justify-center items-center   sm:flex-row '>
        <div className='w-full h-1/2 flex items-center justify-center overflow-hidden  sm:w-[45%] sm:overflow-visible'>
          <img className='w-[50%] sm:w-[85%]' src={experienceImage} alt="Experience_Image" />
        </div>
        <div className='w-full flex flex-col justify-center  sm:w-[50%]'>
        <h2 className='text-black text-2xl font-bold sm:text-[21px] sm:leading-[130px] md:text-[25px] lg:text-[33px]  xl:text-[42px]   '>Best Experinced Freelancer Here</h2>
          <p className='text-black text-md text-justify sm:text-[18px] font-normal  '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          <div className='sm:mt-14'>
            <Button1 btnText="Read More" />
            <Button2 btnText= "Hire" />
          </div>

</p>
        </div>
      </div>
      <div className='w-full h-auto bg-white flex flex-col justify-center items-center'>
        <div className='w-full h-auto flex justify-center' >
          <img className='' src={aboutImage} alt="About Image" />
        </div>
        <div className='h-auto w-full flex flex-col items-center '>
         <div className='max-w-[1170px] flex flex-col items-center  p-5 gap-[20px]'>
         <h2 className='text-slate-950 font-bold text-[40px] text-center md:text-left '>About Spering Company</h2>
          <p className='text-slate-950 text-[16px] text-justify md:text-[18px]' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you</p>
          <div>  
           <Button1 btnText="Read More"/>
          </div>
         </div>
        </div>
      </div>

    </section>
      
    </>
  )
}

export default About
