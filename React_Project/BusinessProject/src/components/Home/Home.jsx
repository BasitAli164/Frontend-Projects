import React from "react";
import "./Home.css";
import bannerImage from "../../assets/banner/banner-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShieldHalved,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  //Icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldHalvedIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                We Promote Your <span>Business</span>{" "}
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                facilis alias harum recusandae soluta cumque libero sit
                blanditiis quis aliquid.
              </p>
              <div className="btn_wrapper">
                <a href="#" className="btn">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={bannerImage} alt="Banner_image" />
              </div>
              <div className="banner_style_1">
                {faChartIcon}
                <h4>Business Analysis </h4>
              </div>
              <div className="banner_style_1 banner_style_2">
                {faShieldHalvedIcon}
                <h4>99.99 Success </h4>
              </div>
              <div className="banner_style_1 banner_style_3">
                {faChartAreaIcon}
                <h4>Strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
