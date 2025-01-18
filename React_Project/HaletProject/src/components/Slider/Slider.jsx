import React from 'react';
import sliderImage from '../../assets/images/client.jpg';
import nextIcon from '../../assets/images/next.png';
import prevIcon from '../../assets/images/prev.png';

const Slider = () => {
  return (
    <>
    <section className=' w-full bg-red-700 flex flex-col justify-start items-center  h-screen  gap-y-10'>
      <div className='mt-2'> 
        <h1 className='text-black text-[32px] font-bold tracking-[1px] uppercase'>Testimonial</h1>
      </div>
      <div className='max-w-[800px] h-[350px] bg-black rounded-xl shadow-2xl flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <img className='w-1/3 rounded-full' src={sliderImage} alt="Slider-Image" />
        </div>
        <div className='text-center '>
          <h3 className='text-[#eeeeee] text-xl font-bold'>Samantha Jonas</h3>
          <p className='text-[#eeeeee] text-center text-lg '>It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable</p>
        </div>
      </div>
      <div>
          <button>
            <img src={nextIcon} alt="Next-Icon" />
          </button>
          <button>
            <img src={prevIcon} alt="Previous-Icon" />
          </button>
      </div>
    </section>
      
    </>
  )
}

export default Slider
