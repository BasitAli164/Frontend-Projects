import React from 'react'
import bgImage from '../../assets/images/slider-bg.jpg'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <>
    <section  className='w-full h-screen bg-red-300 bg-center bg-cover z-100' style={{backgroundImage:`url(${bgImage})`}}>
    <h1>From Home</h1>
    <Button btnText="Shop Now" borderRadius='5px'/>

      
      </section>      
    </>
  )
}

export default Home
