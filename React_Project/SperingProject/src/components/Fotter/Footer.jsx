import React from "react";
import logoImage from "../../assets/images/logo.png";
import facebookIcon from "../../assets/images/fb.png";
import twitterIcon from "../../assets/images/twitter.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import instagramIcon from "../../assets/images/instagram.png";
import youtubeIcon from "../../assets/images/youtube.png";
import locationIcon from '../../assets/images/location.png';
import mailIcon from '../../assets/images/mail.png';
import callIcon from '../../assets/images/call.png'
import { Link } from "react-router-dom";
import { Button1 } from "../Header/Button/Button";
const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col items-center  bg-[#1a2e35]">
        <section className="w-full   flex flex-col justify-center gap-16 sm:max-w-[90%] xl:max-w-[90%] mt-10">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center ">
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-10 sm:w-14 xl:w-14"
                src={logoImage}
                alt="Logo-Icon"
              />
              <h2 className="text-2xl sm:text-3xl font-bold xl:text-5xl">
                Spering
              </h2>
            </div>
            <div className="flex justify-center items-center gap-x-1 sm:flex-row ">
              <img
                className="mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 "
                src={facebookIcon}
                alt="Facebook-Icon"
              />
              <img
                className="mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 "
                src={twitterIcon}
                alt="Twitter-Icon"
              />
              <img
                className="mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 "
                src={linkedinIcon}
                alt="LinkedIn-Icon"
              />
              <img
                className="mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 "
                src={instagramIcon}
                alt="Instagram-Icon"
              />
              <img
                className="mx-1 w-8 my-2 cursor-pointer sm:mx-4 xl:w-10 "
                src={youtubeIcon}
                alt="Youtube-Icon"
              />
            </div>
          </div>
          <div className="grid grid-rows-4 text-center gap-3 sm:grid-cols-4 sm:gap-14  sm:h-[40vh] ">
            <div className="text-left" >
              <h2 className="text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl">
                Useful Link
              </h2>
              <ul>
                <li className="text-lg sm:text-sm md:text-lg xl:text-xl">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-lg sm:text-sm md:text-lg xl:text-xl">
                  <Link to="/about">About</Link>
                </li>
                <li className="text-lg sm:text-sm md:text-lg xl:text-xl">
                  <Link to="/work">Work</Link>
                </li>
                <li className="text-lg sm:text-sm md:text-lg xl:text-xl">
                  <Link to="/category">Category</Link>
                </li>
              </ul>
            </div>
            <div className="text-left" >
              <h2 className="text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl">
                Office
              </h2>
              <p className="text-lg text-center sm:text-justify sm:text-[12px] md:text-[15px] lg:text-lg">
                Readable content of a page when looking at its layoutreadable
                content of a page when looking at its layout
              </p>
            </div>
            <div className="text-left" >
              <h2 className="text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl">
                Information
              </h2>
              <p className="text-lg text-center sm:text-justify sm:text-[12px] md:text-[15px] lg:text-lg">
                Readable content of a page when looking at its layoutreadable
                content of a page when looking at its layout
              </p>
            </div>
            <div className="flex flex-col gap-y-4 sm:gap-2 text-left">
              <h2 className="text-2xl font-bold uppercase tracking-wider sm:text-sm md:text-xl xl:text-2xl">
                Newsletter
              </h2>
              <div className="text-left" >
                <input
                  className="w-[50%] p-2 sm:p-1 sm:w-[90%] xl:p-2 xl:w-[95%] xl:placeholder:text-xl placeholder:text-slate-800"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 -ml-3">
                <Button1 btnText="SUBSCRIBE" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-around mb-5 ">
            <div className="flex">
              <img className="w-[20px] mx-3" src={locationIcon} alt="Location-Icon" />
              <span className="text-lg mx-3">Location</span>
            </div>
            <div className="flex">
              <img className="w-[20px] mx-3" src={mailIcon} alt="Mail-Icon" />
              <span className="text-lg mx-3">demo@gmail.com</span>
            </div>
            <div className="flex">
              <img className="w-[20px] mx-3" src={callIcon} alt="Call-Icon" />
              <span className="text-lg mx-3">Call +01234783939</span>
            </div>
          </div>
        </section>
        <section className="w-full  text-center p-4 bg-white">
          <p className="text-md sm:text-xl text-slate-900  tracking-wider ">
            © 2025 All Rights Reserved By Free Html Templates
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
