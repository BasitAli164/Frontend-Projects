import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBusinessTime,faChartPie,faTruckFast,faUserClock,faHouseLaptop,faPhone} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    //Icons
    const businessIcon=<FontAwesomeIcon icon={faBusinessTime}/>
    const ChartPieIcon=<FontAwesomeIcon icon={faChartPie}/>
    const truckFastIcon=<FontAwesomeIcon icon={faTruckFast}/>
    const userClockIcon=<FontAwesomeIcon icon={faUserClock}/>
    const houseLaptopIcon=<FontAwesomeIcon icon={faHouseLaptop}/>
    const phoneIcon=<FontAwesomeIcon icon={faPhone}/>
    
    
    

  return (
    <>
    <section id="about">
        <div className="container">
            <div className="title_heading">
                <h3>We Provide Shortage Remarkabe Ideas!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ratione dicta provident molestias quod quis.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                    {businessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, earum!</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                    {ChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration </h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, earum!</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                    {truckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, earum!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default About
