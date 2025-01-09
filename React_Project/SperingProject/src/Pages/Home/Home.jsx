import React, { useState } from 'react'
import {Button1,Button2} from '../../components/Header/Button/Button'
import sliderImage from '../../assets/images/slider-img.png'

const Home = () => {
  const [count ,setCount]=useState(1)
  return (
    <>
    <main className='w-full flex flex-col  justify-between  sm:flex-row '>
    <section className='w-full h-auto p-10  bg-[#1a2e35] flex justify-center items-center sm:w-[60%] sm:h-[85vh] sm:items-center sm:justify-center '>
        <div className='flex flex-col justify-center items-start gap-5 md:gap-10 lg:text-center lg:gap-y-10'>
        <div>
          <h2 className='text-2xl font-bold sm:text-3xl sm:font-medium sm:leading-10 xl:text-5xl'>You Can Hire Freelancer Here</h2>
        </div>
        <div>
          <p className='text-lg  text-justify w-[80%]  sm: '>It is a long established fact that a reader will be distracted by  the readable content of a page</p>
        </div>
        <div className='space-x-8 space-y-5 sm:space-y-20  '>
          <Button1 btnText="About Us" />
          <Button2 btnText="Get a job"/>
        </div>
        </div>
      </section>
      <section className='w-full h-[50%] bg-[#1cbbb4] sm:w-[40%] sm:h-[85vh] sm:flex'>
        <div className='flex justify-center items-center'>
          <img className='w-56' src={sliderImage} alt="" />
        </div>
        <div className='relative'>
          <h1 className='absolute right-0 bottom-0 sm:fixed sm:bottom-10 lg:bottom-20 lg:right-2 lg:text-2xl'>0{count}</h1>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
