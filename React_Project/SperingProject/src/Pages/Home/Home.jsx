import React from 'react'
import {Button1,Button2} from '../../components/Header/Button/Button'

const Home = () => {
  return (
    <>
    <main className='w-full h-screen flex flex-col  justify-between  sm:flex-row '>
    <section className='w-full h-[50%]  bg-[#1a2e35] flex justify-center items-center sm:w-[60%] sm:h-screen  sm:items-center sm:justify-center'>
        <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <div>
          <h2 className='text-3xl font-bold leading-8 sm:text-4xl sm:font-medium sm:leading-10'>You Can Hire Freelancer Here</h2>
        </div>
        <div>
          <p className='text-sm leading-relaxed'>It is a long established fact that a reader will be distracted by the readable content of a page</p>
        </div>
        <div className='space-x-8  '>
          <Button1 btnText="About Us" />
          <Button2 btnText="Get a job"/>
        </div>
        </div>
      </section>
      <section className='w-full h-[50%] bg-[#1cbbb4] sm:w-[40%] sm:h-screen sm:flex sm:items-center sm:justify-center'>
        <div>Image</div>
        <div>counter</div>
      </section>
    </main>
    </>
  )
}

export default Home
