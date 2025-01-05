import React from 'react'
import './Service.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode,faChartBar,faCopy,faMarker,faUserGear,faCoins} from "@fortawesome/free-solid-svg-icons"

const Service = () => {
    const labtopIcon=<FontAwesomeIcon icon={faLaptopCode}/>
    const chartIcon=<FontAwesomeIcon icon={faChartBar}/>
    const copyIcon=<FontAwesomeIcon icon={faCopy}/>
    const markerIcon=<FontAwesomeIcon icon={faMarker}/>
    const userGearIcon=<FontAwesomeIcon icon={faUserGear}/>
    const coinIcon=<FontAwesomeIcon icon={faCoins}/>
  return (
    <>
    <div id="services">
        <div className="container">
            <div className="title_heading">
                <h3>What's Serivces We Are Offering to Our Customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia perspiciatis labore molestiae saepe aut.</p>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon">{labtopIcon}</div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Cloud Computing </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nulla delectus?</p>
                        <a href="#" className='read'>Read More</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon ">{chartIcon}</div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>Business Strategy  </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nulla delectus?</p>
                        <a href="#" className='read'>Read More</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{copyIcon}</div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Report Analysis</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nulla delectus?</p>
                        <a href="#" className='read'>Read More</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon ">{markerIcon}</div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Decision Maker </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nulla delectus?</p>
                        <a href="#" className='read'>Read More</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{userGearIcon}</div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Customer Oriented </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nulla delectus?</p>
                        <a href="#" className='read'>Read More</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon blue_icon">{coinIcon}</div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Solution Focused  </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nulla delectus?</p>
                        <a href="#" className='read'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Service
