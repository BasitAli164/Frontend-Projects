import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faYoutube,
  faInstagram,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const youTubeIcon = <FontAwesomeIcon icon={faYoutube} />;
  const whatsAppIcon = <FontAwesomeIcon icon={faWhatsapp} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const skypeIcon = <FontAwesomeIcon icon={faSkype} />;
  return (
    <div className=" bg-black grid grid-cols-3 container p-32 gap-40 ">
      <div>
        <h1 className="text-3xl  font-semibold text-white">
          <span className="text-gray-500 ">Little</span> Fashion
        </h1>
        <p className="text-gray-500 text-[1.1rem] leading-[26.4px] mt-10">
          Copyright © 2025 Little Fashion Designed by Tooplate
        </p>
      </div>
      <div>
        <h1 className="text-2xl text-white font-semibold">Sitemap</h1>
        <div className="flex gap-14 mt-5">
          <div className="flex flex-col gap-y-2">
            <Link to="/story" className="text-gray-500 hover:text-orange-300">
              Story
            </Link>
            <Link to="privacy" className="text-gray-500 hover:text-orange-300">
              Privacy Policy
            </Link>
            <Link to="contact" className="text-gray-500 hover:text-orange-300">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <Link to="product" className="text-gray-500 hover:text-orange-300">
              Products
            </Link>
            <Link to="faqs" className="text-gray-500 hover:text-orange-300">
              FAQs
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white font-semibold">Social</h1>
        <div className="flex gap-x-3">
          <Link
            to="https://www.youtube.com"
            className="text-gray-500 font-semibold text-xl hover:text-orange-300"
          >
            {youTubeIcon}
          </Link>
          <Link
            to="https://www.whatsapp.com"
            className="text-gray-500 font-semibold text-xl hover:text-orange-300"
          >
            {whatsAppIcon}
          </Link>
          <Link
            to="https://www.instagram.com"
            className="text-gray-500 font-semibold text-xl hover:text-orange-300"
          >
            {instagramIcon}
          </Link>
          <Link
            to="https://www.skye.com"
            className="text-gray-500 font-semibold text-xl hover:text-orange-300"
          >
            {skypeIcon}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
