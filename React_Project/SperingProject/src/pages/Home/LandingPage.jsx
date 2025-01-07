import React from 'react'
import sliderImage from '../../assets/images/slider-img.png'
import Button from '../../components/Button/Button'
const LandingPage = () => {

    return (
        <>
            <main>
                <div className="leftPart">
                    <h1>You Can Hire Freelancer Here</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    <Button btnText="About Us" btnName="redish"/>
                    <Button btnText="About Us" />

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
