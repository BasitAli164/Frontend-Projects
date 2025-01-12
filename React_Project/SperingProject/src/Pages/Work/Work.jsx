import React from 'react'
import freelanceImage from '../../assets/images/freelance-img.jpg';
import work1 from '../../assets/images/f1.png';
import work2 from '../../assets/images/f2.png';
import work3 from '../../assets/images/f3.png';
import work4 from '../../assets/images/f4.png';


const Work = () => {
  return (
    <>
    <section className='flex flex-col gap-y-20 sm:flex-row justify-between    bg-white w-full h-[150vh] '>
      <div className='flex justify-center items-center ml-6 sm:ml-16 w-full h-screen'>
       
        <div className='flex flex-col justify-center items-start mt-20 gap-y-10 '>
          <div>
            <h1 className='text-black text-4xl font-bold'>Work Freelaner Has Done</h1>
          </div>
          <div className='flex  justify-center items-center gap-x-5'>
            <div className='w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] bg-[#1a2e35] flex justify-center items-center rounded-full '>
              <img className='w-10' src={work1} alt="Work-Icon" />
            </div>
            <div>
              <span className='text-red-400 text-lg sm:text-2xl font-bold'>$250 Million</span>
              <p className='text-black text-md sm:text-2xl font-bold'>Paid to Freelancers</p>
            </div>
          </div>
          <div className='flex  justify-center items-center gap-x-5'>
            <div className='w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] bg-[#1a2e35] flex justify-center items-center rounded-full '>
              <img className='w-10' src={work2} alt="Work-Icon" />
            </div>
            <div>
              <span className='text-red-400 text-lg sm:text-2xl font-bold'>2 Million</span>
              <p className='text-black text-md sm:text-2xl font-bold'>Paid Invoices</p>
            </div>
          </div>
          <div className='flex  justify-center items-center gap-x-5'>
            <div className='w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] bg-[#1a2e35] flex justify-center items-center rounded-full '>
              <img className='w-10' src={work3} alt="Work-Icon" />
            </div>
            <div>
              <span className='text-red-400 text-lg sm:text-2xl font-bold'>700,000</span>
              <p className='text-black text-md sm:text-2xl font-bold'>Worldwide Freelancer</p>
            </div>
          </div>
          <div className='flex  justify-center items-center gap-x-5'>
            <div className='w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] bg-[#1a2e35] flex justify-center items-center rounded-full '>
              <img className='w-10' src={work4} alt="Work-Icon" />
            </div>
            <div>
              <span className='text-red-400 text-lg sm:text-2xl font-bold'>98%</span>
              <p className='text-black text-md sm:text-2xl font-bold'>Customer Satisfaction Rate</p>
            </div>
          </div>
          
          
        </div>
      </div>
      <div>
        <img src={freelanceImage} alt="Freelance-Image" />
      </div>

    </section>
    </>
  )
}

export default Work
