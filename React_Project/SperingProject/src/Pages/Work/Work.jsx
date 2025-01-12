import React from 'react'
import freelanceImage from '../../assets/images/freelance-img.jpg';
import work1 from '../../assets/images/f1.png';
import work2 from '../../assets/images/f2.png';
import work3 from '../../assets/images/f3.png';
import work4 from '../../assets/images/f4.png';


const Work = () => {
  return (
    <>
    <section>
      <div>
        <div>
          <h2>Work Freelaner Has Done</h2>
        </div>
        <div>
          <div>
            <div>
              <img src={work1} alt="Work-Icon" />
            </div>
            <div>
              <span>$250 Million</span>
              <p>Paid to Freelancers</p>
            </div>
          </div>
          <div>
            <div>
              <img src={work2} alt="Work-Icon" />
            </div>
            <div>
              <span>2 Million</span>
              <p>Paid Invoices</p>
            </div>
          </div>
          <div>
            <div>
              <img src={work3} alt="Work-Icon" />
            </div>
            <div>
              <span>700,000</span>
              <p>Worldwide Freelancer</p>
            </div>
          </div>
          <div>
            <div>
              <img src={work4} alt="Work-Icon" />
            </div>
            <div>
              <span>98% </span>
              <p>Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={freelanceImage} alt="Freelance-Image" />
      </div>

    </section>
    </>
  )
}

export default Work
