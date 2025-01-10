import React from 'react'
import { Button1, Button2 } from '../../components/Header/Button/Button'
import experienceImage from '../../assets/images/experience-img.jpg'

const About = () => {
  return (
    <>
    <section className='bg-white w-full h-screen '>
      <div className='w-full flex flex-col  items-center justify-center sm:flex-row '>
        <div className='w-7/12 bg-red-300 flex items-center justify-center mt-5'>
          <img className='w-full' src={experienceImage} alt="Experience_Image" />
        </div>
        <div>
        <h2 className='text-black'>Best Experinced Freelancer Here</h2>
          <p className='text-black'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
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
