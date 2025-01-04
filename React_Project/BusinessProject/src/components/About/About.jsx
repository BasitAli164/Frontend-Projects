import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBusinessTime,faChartPie,faTruckFast,faUserClock,faHouseLaptop,faPhone} from '@fortawesome/free-solid-svg-icons'
import aboutImage from '../../assets/about/about_img.jpg'

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
            <div className="about_box_detials">
                <div className="about_col">
                    <div className="about_img">
                        <img src={aboutImage} alt="about_image" />
                    </div>
                    <div className="img_info_box">
                        <h6 className="img_info_title">Get a price Quote today!</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Perspiciatis quo reiciendis perferendis.</p>
                        <a href="#">{phoneIcon} <span>+923-475495500</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business  skills  that will increase your earnings </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam temporibus consequatur vel quis architecto. Accusamus.</p>
                    <div className="grid_info">
                        <div className="icon">{userClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, pariatur!</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon">{houseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, pariatur!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default About
