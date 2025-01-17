import React from 'react';
import Button from '../../components/Button/Button';
import product1 from '../../assets/images/p1.png'

const Shop = () => {
  return (
    <>
    <section className='w-full flex flex-col justify-center items-center'>
      <div className='mt-20'>
        <h2 className='text-[32px] font-bold  uppercase '>Latest Products</h2>
      </div>
      <div className='w-[260px] h-[300px] border-[1px] bg-[#e9e9e2]'>
        <div className='w-full h-[75%] flex justify-center items-center'>
          <img className='w-1/2' src={product1} alt="Product-Image" />
        </div>
        <div className='h-[20%] flex items-end justify-between '>
          <p>Necklace</p>
          <p>Price <span>$200</span></p>
        </div>
      </div>
      <div>
        <Button/>
      </div>
      </section>      
    </>
  )
}

export default Shop
