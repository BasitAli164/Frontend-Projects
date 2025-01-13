import React from 'react'
import work1 from '../../assets/images/f1.png';
import work2 from '../../assets/images/f2.png';
import work3 from '../../assets/images/f3.png';
import work4 from '../../assets/images/f4.png';
import freelanceImage from '../../assets/images/freelance-img.jpg';


const Work = () => {
  return (
    <>
    <section>
      <div>
        <div>
          <h1>Work Freelaner Has Done</h1>
        </div>
        <div>
          <div>
            <img src={work1} alt="" />
          </div>
          <div>
            <span>$250 Million</span>
            <span>Paid to Freelancers</span>
          </div>
        </div>
        <div>
          <div>
            <img src={work2} alt="" />
          </div>
          <div>
            <span>2 Million</span>
            <span>Paid Invoices</span>
          </div>
        </div>
        <div>
          <div>
            <img src={work3} alt="" />
          </div>
          <div>
            <span>700,000</span>
            <span>Worldwide Freelancer</span>
          </div>
        </div>
        <div>
          <div>
            <img src={work4} alt="" />
          </div>
          <div>
            <span>98%</span>
            <span>Customer Satisfaction Rate</span>
          </div>
        </div>
      </div>
      <div className='bg-center bg-cover w-full h-screen' style={{backgroundImage:`url(${freelanceImage})`}}>
      
      </div>

    </section>
    </>
  )
}

export default Work
