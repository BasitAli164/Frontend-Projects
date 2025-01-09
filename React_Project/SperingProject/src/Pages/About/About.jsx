import React from 'react'
import { Button1, Button2 } from '../../components/Header/Button/Button'
import experienceImage from '../../assets/images/experience-img.jpg'

const About = () => {
  return (
    <>
    <section className='bg-white w-full h-screen '>
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
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2></h2>
          <p></p>
          <Button1 btnText="Read More"/>
        </div>
      </div>

    </section>
      
    </>
  )
}

export default About
