import React from 'react';
import aboutImage from '../../assets/images/about-img.jpg'
import Button from '../../components/Button/Button'

const About = () => {
  return (
    <>
  <section className='h-screen w-full grid grid-rows-[auto, auto] md:grid-cols-2 relative' >
    <div 
    className='justify-self-center self-center xl:after:w-[250px] xl:after:h-[250px] xl:after:bg-black xl:after:absolute xl:after:top-20 xl:after:left-10  lg:after:w-[250px] lg:after:h-[250px] lg:after:bg-black lg:after:absolute lg:after:top-32 lg:after:left-2  md:after:w-[200px] md:after:h-[200px] md:after:bg-black md:after:absolute md:after:top-40 md:after:left-2 -z-10]'
    >
      <img className='sm:w-[350px] md:w-[300px] lg:w-[440px] xl:w-[500px] relative z-[2] ' src={aboutImage} alt="About-Image" />
    </div>
    <div className=' justify-self-center self-center '>
       <div  >
       <h2 className='text-[32px] font-bold my-3 font-serif'>About us</h2>
       <p className='text-[16px] text-justify font-serif w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.</p>
       <div className='mt-10'>
        <Button btnText="Read More"/>
       </div>
       </div>
    </div>
  </section>      
    </>
  )
}

export default About
