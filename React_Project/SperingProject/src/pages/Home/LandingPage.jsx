import React from 'react'
import './LandingPage.css'
import sliderImage from '../../assets/images/slider-img.png'
import Button from '../../components/Button/Button'
const LandingPage = () => {

    return (
        <>
            <main id='landingPage'>
                <div className="leftPart">
                    <div className="headings">
                    <h1>You Can <br /> Hire Freelancer <br />Here</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                   
                   <div className="btn">
                   <Button btnText="About Us" btnName="redish"/>
                    <Button btnText="About Us" />

                   </div>
                   </div>
                </div>
                <div className="rightPart">
                    <img src={sliderImage} alt="" />
                    <span>03</span>
                </div>
            </main>

        </>
    )
}

export default LandingPage
