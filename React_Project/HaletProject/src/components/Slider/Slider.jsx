import React from 'react';
import sliderImage from '../../assets/images/client.jpg';
import nextIcon from '../../assets/images/next.png';
import prevIcon from '../../assets/images/prev.png';

const Slider = () => {
  return (
    <>
    <section>
      <div>
        <h1>Testimonial</h1>
      </div>
      <div>
        <div>
          <img src={sliderImage} alt="Slider-Image" />
        </div>
        <div>
          <h3>Samantha Jonas</h3>
          <p>It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable</p>
        </div>
      </div>
      <div>
          <button>
            <img src={nextIcon} alt="Next-Icon" />
          </button>
          <button>
            <img src={prevIcon} alt="Previous-Icon" />
          </button>
      </div>
    </section>
      
    </>
  )
}

export default Slider
