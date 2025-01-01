import React, { useRef, useState } from 'react'
import './ImageGenerator.css';
import defaultImage from '../../assets/image/aboutUs/about2.jpg'

const ImageGenerator = () => {
    const [imageUrl,setImageUrl]=useState("/");
    let inputRef=useRef(null)

    const imageGenerator=async()=>{
        if(inputRef.current.value===""){
            return 0;
        }
        const response=await fetch()
    }
  return (
    <div className='ai-image-generator'>
      <div className='header'>AI image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={imageUrl==='/'?defaultImage:imageUrl} alt="" /></div>
      </div>
      <div className="searchBox">
        <input type="text" ref={inputRef} className="search-input" placeholder='Describe What You Want To See ' />
        <div className="generate-btn">Generate </div>
      </div>
    </div>
  )
}

export default ImageGenerator
