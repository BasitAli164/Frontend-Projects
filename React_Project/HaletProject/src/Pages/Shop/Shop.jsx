import React from 'react';
import Button from '../../components/Button/Button';
import product1 from '../../assets/images/p1.png'

const Shop = () => {
  return (
    <>
    <section className='w-full flex flex-col justify-center items-center mb-20  gap-y-20'>
      <div className='mt-10'>
        <h2 className='text-[32px] font-bold  uppercase '>Latest Products</h2>
      </div>
     <div className='flex justify-center items-center gap-10 flex-wrap'>
     <div className='w-[260px] h-[300px] border-[1px] bg-[#eeeeee]'>
        <div className='w-full h-[75%] flex justify-center items-center'>
          <img className='max-w-full max-h-[150px]' src={product1} alt="Product-Image" />
        </div>
        <div className='h-[20%] flex items-end justify-between '>
          <p className='text-black text-[16px] font-semibold'>Necklace</p>
          <p className='text-black text-[16px]'>Price: <span className='text-bold text-[#fd9c6b] text-[18px]'>$200</span></p>
        </div>
      </div>
     <div className='w-[260px] h-[300px] border-[1px] bg-[#eeeeee]'>
        <div className='w-full h-[75%] flex justify-center items-center'>
          <img className='max-w-full max-h-[150px]' src={product1} alt="Product-Image" />
        </div>
        <div className='h-[20%] flex items-end justify-between '>
          <p className='text-black text-[16px] font-semibold'>Necklace</p>
          <p className='text-black text-[16px]'>Price: <span className='text-bold text-[#fd9c6b] text-[18px]'>$200</span></p>
        </div>
      </div>
     <div className='w-[260px] h-[300px] border-[1px] bg-[#eeeeee]'>
        <div className='w-full h-[75%] flex justify-center items-center'>
          <img className='max-w-full max-h-[150px]' src={product1} alt="Product-Image" />
        </div>
        <div className='h-[20%] flex items-end justify-between '>
          <p className='text-black text-[16px] font-semibold'>Necklace</p>
          <p className='text-black text-[16px]'>Price: <span className='text-bold text-[#fd9c6b] text-[18px]'>$200</span></p>
        </div>
      </div>
     <div className='w-[260px] h-[300px] border-[1px] bg-[#eeeeee]'>
        <div className='w-full h-[75%] flex justify-center items-center'>
          <img className='max-w-full max-h-[150px]' src={product1} alt="Product-Image" />
        </div>
        <div className='h-[20%] flex items-end justify-between '>
          <p className='text-black text-[16px] font-semibold'>Necklace</p>
          <p className='text-black text-[16px]'>Price: <span className='text-bold text-[#fd9c6b] text-[18px]'>$200</span></p>
        </div>
      </div>
     <div className='w-[260px] h-[300px] border-[1px] bg-[#eeeeee]'>
        <div className='w-full h-[75%] flex justify-center items-center'>
          <img className='max-w-full max-h-[150px]' src={product1} alt="Product-Image" />
        </div>
        <div className='h-[20%] flex items-end justify-between '>
          <p className='text-black text-[16px] font-semibold'>Necklace</p>
          <p className='text-black text-[16px]'>Price: <span className='text-bold text-[#fd9c6b] text-[18px]'>$200</span></p>
        </div>
      </div>
     <div className='w-[260px] h-[300px] border-[1px] bg-[#eeeeee]'>
        <div className='w-full h-[75%] flex justify-center items-center'>
          <img className='max-w-full max-h-[150px]' src={product1} alt="Product-Image" />
        </div>
        <div className='h-[20%] flex items-end justify-between '>
          <p className='text-black text-[16px] font-semibold'>Necklace</p>
          <p className='text-black text-[16px]'>Price: <span className='text-bold text-[#fd9c6b] text-[18px]'>$200</span></p>
        </div>
      </div>
     </div>
      <div>
        <Button btnText="View All Products"/>
      </div>
      </section>      
    </>
  )
}

export default Shop
