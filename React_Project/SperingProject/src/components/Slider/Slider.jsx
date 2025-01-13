import React from 'react'
import prevIcon from '../../assets/images/prev.png'
import nextIcon from '../../assets/images/next.png'

const Slider = () => {
    const headings=['John Hissona',]
  return (
    <>
   <section className='w-full h-auto bg-white p-20'>
   <section className='flex justify-center items-center '> 
        <div className='w-[75%] h-[50%] p-16  bg-slate-100 mb-20 shadow-2xl relative'>
            <div className='text-center '>
                <h1 className='text-5xl leading-[100px] text-black'>John Hissona</h1>
                <p className='text-xl text-black text-justify'>passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                
            </div>
            <div className='absolute'>
                <div>
                <img src={prevIcon} alt="Previous-Icon" />
                </div>
                <div>
                <img src={nextIcon} alt="Next-Icon" />
                </div>

            </div>
        </div>

    </section>
   </section>
      
    </>
  )
}

export default Slider
