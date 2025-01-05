import React from 'react'
import './Service.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLabtopCode,faChartBar,faCopy,faMarker,faUserGear,faCoins} from "@fortawesome/free-solid-svg-icons"

const Service = () => {
    const labtopIcon=<FontAwesomeIcon icon={faLabtopCode}/>
    const chartIcon=<FontAwesomeIcon icon={faChartBar}/>
    const copyIcon=<FontAwesomeIcon icon={faCopy}/>
    const markerIcon=<FontAwesomeIcon icon={faMarker}/>
    const userGearIcon=<FontAwesomeIcon icon={faUserGear}/>
    const coinIcon=<FontAwesomeIcon icon={faCoins}/>
  return (
    <>
    <div className="services">
        <div className="container">
            <div className="title_heading">
                <h3>What's Serivces We Are Offering to Our Customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia perspiciatis labore molestiae saepe aut.</p>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon">

                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Service
