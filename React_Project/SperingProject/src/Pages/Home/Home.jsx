import React, { useState } from 'react'
import { Button1, Button2 } from '../../components/Button/Button'
import sliderImage from '../../assets/images/slider-img.png'
import About from '../About/About'
import Category from '../Category/Category'
import Work from '../Work/Work'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  const [count, setCount] = useState(1);
  setTimeout(() => {
    if (count < 3) {

      setCount(count + 1)
    }

  }, 3000); 
  return (
    <>
      <main className='w-full flex flex-col  justify-between  sm:flex-row '>
        <section className='w-full h-[75vh] p-5  bg-[#1a2e35] flex flex-col  sm:w-[60%] sm:h-[91vh] sm:items-center sm:justify-center '>
          <div className='flex flex-col justify-center items-start mt-14 gap-5 md:gap-10 sm:mt-0 lg:text-center lg:gap-y-10'>
            <div>
              <h2 className='text-2xl  font-bold sm:text-3xl sm:font-medium sm:leading-10 xl:text-5xl'>You Can Hire Freelancer Here</h2>
            </div>
            <div>
              <p className='text-lg  text-justify w-[80%]'>It is a long established fact that a reader will be distracted by  the readable content of a page</p>
            </div>
            <div className='space-x-5  space-y-1 sm:space-y-20  sm:bottom-[15%] sm:space-x-10'>
              <Button1 btnText="About Us" />
              <Button2 btnText="Get a job" condition={true} />
            </div>
          </div>

        </section>
        <section className='w-full h-[50vh] bg-[#1cbbb4] sm:w-[40%] sm:h-[91vh] sm:flex'>
          <div className='flex justify-center items-center sm:flex sm:justify-center sm:items-center'>
            <img className='w-56 mt-10 sm:w-3/4 ' src={sliderImage} alt="" />
          </div>
          <div className='relative'>
            <h1 className='absolute right-2 top-[-20px] text-sm sm:sticky  sm:top-[93%] sm:right-5 lg:bottom-5  lg:right-4 lg:text-2xl'>0{count}</h1>
          </div>

        </section>
      </main>
      <About/>
      <Category/>
      <Work/>
      <Slider/>
    </>
  )
}

export default Home