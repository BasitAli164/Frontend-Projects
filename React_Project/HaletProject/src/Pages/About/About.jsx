import React from 'react';
import aboutImage from '../../assets/images/about-img.jpg'
import Button from '../../components/Button/Button'

const About = () => {
  return (
    <>
  <section className='h-screen w-full grid grid-rows-[auto, auto] sm:grid-cols-2 relative' >
    <div className='justify-self-center self-center after:w-[250px] after:h-[250px] after:bg-black after:absolute after:top-20 after:left-10 -z-10]'>
      <img className='w-[500px] relative z-[2]' src={aboutImage} alt="About-Image" />
    </div>
    <div className=' justify-self-center self-center '>
       <div >
       <h2 className='text-7xl font-bold my-3'>About us</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.</p>
       <div>
        <Button btnText="Read More" bgColor='#000'/>
       </div>
       </div>
    </div>
  </section>      
    </>
  )
}

export default About
