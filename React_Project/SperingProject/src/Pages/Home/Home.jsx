import React from 'react'
import {Button1,Button2} from '../../components/Button/Button'

const Home = () => {
  return (
    <>
    <main className='w-full h-screen flex flex-col  justify-between  md:flex-row '>
    <section className='w-full h-[50%]  bg-[#1a2e35] justify-center items-center md:w-[60%] md:h-screen  '>
        <div>
        <div>
          <h2>You Can Hire Freelancer Here</h2>
        </div>
        <div>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
        </div>
        <div>
          <Button1 btnText="About Us"/>
          <Button2 btnText="Get a job"/>
        </div>
        </div>
      </section>
      <section className='w-full h-[50%] bg-[#1cbbb4] md:w-[40%] md:h-screen md:flex md:items-center md:justify-center'>
        <div>Image</div>
        <div>counter</div>
      </section>
    </main>
    </>
  )
}

export default Home
