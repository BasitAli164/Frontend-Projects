import React from 'react'
import './ImageGenerator.css';
import defaultImage from '../../assets/image/aboutUs/about2.jpg'

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className='header'>AI image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={defaultImage} alt="" width={300} /></div>
      </div>
    </div>
  )
}

export default ImageGenerator
