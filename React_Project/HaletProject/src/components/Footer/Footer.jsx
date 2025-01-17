import React from "react";
import facebookIcon from '../../assets/images/fb.png';
import twitterIcon from '../../assets/images/twitter.png';
import linkedinIcon from '../../assets/images/linkedin.png';

const Footer = () => {
  return (
    <>
      <footer className="w-full  bg-[#160e0b]">
        <section className="flex flex-col justify-center p-10">
          <div className="w-full flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row">
            <div className="sm:ml-10  flex w-full sm:w-[80%]">
              <input
                className="w-full  sm:w-[60%] h-12 active:outline-none active:border-none border-none outline-none text-lg sm:text-xl"
                type="text"
                placeholder="Enter your email"
              />
              <span className="text-white block w-16 h-12 bg-[#fd9c6b] text-center text-3xl hover:border-t-transparent hover:text-[#fd9c6b] hover:border-[2px] hover:border-[#fd9c6b] hover:border-solid font-extrabold cursor-pointer">
                &#8594;
              </span>
            </div>
            <div className="flex justify-center items-center gap-x-5">
              <div className="w-10 h-10 border-[1px] border-solid border-white  flex justify-center items-center hover:border-[#fd9c6b] cursor-pointer">
              <img src={facebookIcon} alt="Facebook-Icon" className="w-5 hover:text-[#fd9c6b]" />

              </div>
              <div className="w-10 h-10 border-[1px] border-solid border-whiter flex justify-center items-center hover:border-[#fd9c6b] cursor-pointer">
              <img src={twitterIcon} alt="Twitter-Icon" className="w-5 hover:text-[#fd9c6b]" />

              </div>
              <div className="w-10 h-10 border-[1px] border-solid border-white  flex justify-center items-center hover:border-[#fd9c6b] cursor-pointer">
              <img src={linkedinIcon} alt="Linkedin-Icon" className="w-5 hover:text-[#fd9c6b]" />

              </div>
            </div>
            
          </div>
          <div>
            <div>menu</div>
            <div>Instagram</div>
            <div>About Us</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
        </section>
        <section className="w-full p-6 bg-[#e9e9e9]">
          <p className="text-black text-xl  text-center">
            &copy; All Rights Reserved By Free Html Temlate
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
