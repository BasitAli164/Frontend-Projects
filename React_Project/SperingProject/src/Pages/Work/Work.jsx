import React from 'react';
import work1 from '../../assets/images/f1.png';
import work2 from '../../assets/images/f2.png';
import work3 from '../../assets/images/f3.png';
import work4 from '../../assets/images/f4.png';
import freelanceImage from '../../assets/images/freelance-img.jpg';


const Work = () => {
  
  return (
    <>
    <section className='grid grid-rows-[auto,auto] sm:grid-cols-2 bg-white '> 
      <div className='flex flex-col items-start justify-center ml-10 gap-y-8 mt-20 mb-10'>
        <div>
          <h1 className='text-4xl font-bold text-black'>Work Freelaner Has Done</h1>
        </div>
        <div className='flex items-center justify-center gap-x-4'>
          <div className='cursor-pointer w-[100px] h-[100px] bg-[#1a2e35] rounded-full flex items-center justify-center hover:bg-[#1cbbb4] ' >
            <img src={work1} alt="" />
          </div>
          <div className='cursor-pointer'>
            <span className='text-red-500 text-3xl font-bold '>$250 Million</span>
            <p className='text-black font-semibold text-2xl '  >Paid to Freelancers</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-4'>
        <div className='cursor-pointer w-[100px] h-[100px] bg-[#1a2e35] rounded-full flex items-center justify-center hover:bg-[#1cbbb4]'>
            <img src={work2} alt="" />
          </div>
          <div className='cursor-pointer'>
            <span className='text-red-500 text-3xl font-bold '>2 Million</span>
            <p className='text-black font-semibold text-2xl'>Paid Invoices</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-4'>
        <div className='cursor-pointer w-[100px] h-[100px] bg-[#1a2e35] rounded-full flex items-center justify-center hover:bg-[#1cbbb4]'>
            <img src={work3} alt="" />
          </div>
          <div className='cursor-pointer'>
            <span className='text-red-500 text-3xl font-bold '>700,000</span>
            <p className='text-black font-semibold text-2xl'>Worldwide Freelancer</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-4'>
        <div className='cursor-pointer w-[150px] sm:w-[100px] h-[100px] bg-[#1a2e35] rounded-full flex items-center justify-center hover:bg-[#1cbbb4]'>
            <img src={work4} alt="" />
          </div>
          <div className='cursor-pointer'>
            <span className='text-red-500 text-3xl font-bold '>98%</span>
            <p className='text-black font-semibold text-2xl'>Customer Satisfaction Rate</p>
          </div>
        </div>
       
      </div>
     <div className='flex justify-center items-center h-screen'>
     <div className='bg-center bg-cover w-full relative z-50 h-[50%]' style={{backgroundImage:`url(${freelanceImage})`}}>
      
      </div>
     </div>

    </section>
    </>
  )
}

export default Work
