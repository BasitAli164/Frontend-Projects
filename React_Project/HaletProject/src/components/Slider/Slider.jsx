import React from 'react';
import sliderImage from '../../assets/images/client.jpg';
import nextIcon from '../../assets/images/next.png';
import prevIcon from '../../assets/images/prev.png';

const Slider = () => {
  return (
    <>
    <section className=' w-full flex flex-col justify-start items-center  h-screen  gap-y-10'>
      <div className='mt-2'> 
        <h1 className='text-black text-[32px] font-bold tracking-[1px] uppercase'>Testimonial</h1>
      </div>
      <div className='max-w-[800px] h-[350px] bg-black rounded-xl shadow-2xl flex flex-col justify-center items-center relative'>
        <div className='flex justify-center items-center '>
          <img className='w-1/3 rounded-full border-[8px]  border-solid border-gray-600 ' src={sliderImage} alt="Slider-Image" />
        </div>
        <div className="text-center  after:content-['\201C'] after:text-white after:text-8xl after:absolute after:bottom-[-30px]">
          <h3 className='text-[#fd9c6b] text-xl font-bold'>Samantha Jonas</h3>
          <p className='text-[#eeeeee] text-center text-lg  '>It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable</p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-10'>
          <button className='bg-[#fd9c6b] p-3 rounded-md w-14 border-none outline-none active:outline-none '>
            <img className='w-5' src={nextIcon} alt="Next-Icon" />
          </button>
          <button className='bg-[#fd9c6b] p-3 rounded-md w-14 border-none outline-none active:outline-none '>
            <img className='w-5' src={prevIcon} alt="Previous-Icon" />
          </button>
      </div>
    </section>
      
    </>
  )
}

export default Slider
