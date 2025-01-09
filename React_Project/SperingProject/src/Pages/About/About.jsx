import React from 'react'
import { Button1, Button2 } from '../../components/Header/Button/Button'
import experienceImage from '../../assets/images/experience-img.jpg'

const About = () => {
  return (
    <>
    <section className='bg-white w-full h-screen '>
      <div className='w-full h-screen flex flex-col   sm:flex-row '>
        <div className='w-full h-1/2 flex items-center justify-center overflow-hidden  sm:w-[45%]'>
          <img className='w-[50%]' src={experienceImage} alt="Experience_Image" />
        </div>
        <div className='w-full flex flex-col justify-center items-center sm:w-[55%]'>
        <h2 className='text-black text-2xl font-bold  '>Best Experinced Freelancer Here</h2>
          <p className='text-black text-md text-justify '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          <div>
            <Button1 btnText="Read More" />
            <Button2 btnText= "Hire"/>
          </div>

</p>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default About
