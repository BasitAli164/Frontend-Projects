import React from 'react'
import './About.css'
import {FontAwesomIcon} from '@fortawesome/react-fontawesome'
import {faBusinessTime,faChartPie,faTruckFast,faUserClock,faHouseLaptop,faPhone} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    //Icons
    const businessIcon=<FontAwesomIcon icon={faBusinessTime}/>
    const ChartPieIcon=<FontAwesomIcon icon={faChartPie}/>
    const truckFastIcon=<FontAwesomIcon icon={faTruckFast}/>
    const userClockIcon=<FontAwesomIcon icon={faUserClock}/>
    const houseLaptopIcon=<FontAwesomIcon icon={faHouseLaptop}/>
    const phoneIcon=<FontAwesomIcon icon={faPhone}/>
    
    
    

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
                    <div className="about_icon"></div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default About
