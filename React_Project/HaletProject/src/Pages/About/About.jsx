import React from 'react';
import aboutImage from '../../assets/images/about-img.jpg'
import Button from '../../components/Button/Button'

const About = () => {
  return (
    <>
  <section className='h-screen w-full grid grid-rows-[auto, auto] md:grid-cols-2 relative' >
    <div 
    className='justify-self-center self-center xl:after:w-[250px] xl:after:h-[250px] xl:after:bg-black xl:after:absolute xl:after:top-20 xl:after:left-10  lg:after:w-[250px] lg:after:h-[250px] lg:after:bg-black lg:after:absolute lg:after:top-32 lg:after:left-2  md:after:w-[200px] md:after:h-[200px] md:after:bg-black md:after:absolute md:after:top-24 md:after:left-1 -z-10]'
    >
      <img className='w-[250px] sm:w-[350px] md:w-[350px] lg:w-[440px] xl:w-[500px] 2xl:w-[700px] relative z-[2] ' src={aboutImage} alt="About-Image" />
    </div>
    <div className='place-items-center place-self-center'>
       <div  className='flex flex-col justify-start items-center'>
       <h2 className='text-[24px] sm:text-[32px] font-bold my-3 font-serif text-left'>About us</h2>
       <p className='text-[14px] sm:text-[16px] text-justify font-serif w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.</p>
       <div className='mt-2 sm:mt-10'>
        <Button btnText="Read More"/>
       </div>
       </div>
    </div>
  </section>      
    </>
  )
}

export default About
