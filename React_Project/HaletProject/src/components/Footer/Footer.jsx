import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='w-full  bg-[#160e0b]'>
        <section className='flex flex-col justify-center p-10'>
          <div className='ml-10 relative flex'>
            <input className='w-[60%] h-10 ' type="text" />
            <span className='text-white block w-3 h-3 bg-[#]'>&#8594;</span>
          </div>
          <div>
          <div>menu</div>
          <div>Instagram</div>
          <div>About Us</div>
          <div>About Us</div>
          <div>Contact Us</div>
          </div>
        </section>
        <section className='w-full p-6 bg-[#e9e9e9]'>
          <p className='text-black text-xl  text-center'>&copy; All Rights Reserved By Free Html Temlate</p>
        </section>
      </footer>
    </>
  )
}

export default Footer
