import React from 'react';
import './LandingPage.css';
import Button from '../../components/Button/Button';
import sliderImage from '../../assets/images/slider-img.png';
import prevIcon from '../../assets/images/prev.png';
import nextIcon from '../../assets/images/next.png';

const LandingPage = () => {

    return (
        <>
            <main id='landingPage'>
                <div className="leftPart">
                    <div className="headings">
                    <h1>You Can <br /> Hire Freelancer <br />Here</h1>
                    <p>It is a long established fact that a reader will be distracted by the <br /> readable content of a page</p>
                   
                   <div className="btn">
                   <Button btnText="About Us" btnName="redish"/>
                    <Button btnText="About Us" />

                   </div>

                   <div className="landingIcons">
                    <div className="prevIcon">
                        <img src={prevIcon} alt="" />
                    </div>
                    <div className="nextIcon">
                        <img src={nextIcon} alt="" />
                    </div>
                   </div>
                   </div>
                </div>
                <div className="rightPart">
                    <img src={sliderImage} alt="SliderImage" />
                    <div>
                        <span>3</span>
                    </div>
                </div>
            </main>

        </>
    )
}

export default LandingPage
