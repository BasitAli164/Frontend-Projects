import React from 'react'
import logoImage from "../../assets/images/logo.png"


const Footer = () => {
  return (
    <>
    <section className='w-full h-screen bg-slate-600'>
    <div className='max-w-[1170px] h-auto flex flex-col '
    
    >
      <div>
        <div>
          <img src={logoImage} alt="" />
          <h2>Spering</h2>
        </div>
        <div>
          
        </div>
      </div>
      <div>More Information </div>
      <div>Detail information </div>

    </div>
        
    </section>      
    </>
  )
}

export default Footer
