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
    <div className=" bg-black grid grid-cols-3 container p-10 gap-40">
      <div>
        <h1 className="text-3xl  font-semibold text-white">
          <span className="text-gray-500 ">Little</span> Fashion
        </h1>
        <p className="text-gray-500 text-[1.1rem] leading-[26.4px] mt-10">
          Copyright © 2022 Little Fashion Designed by Tooplate
        </p>
      </div>
      <div>
        <h1 className="text-2xl text-white font-semibold">Sitemap</h1>
        <div className="flex gap-14 mt-5">
          <div className="text-gray-500 flex flex-col gap-y-2">
            <Link to="/story">Story</Link>
            <Link to="privacy">Privacy Policy</Link>
            <Link to="contact">Contact</Link>
          </div>
          <div className="text-gray-500 flex flex-col gap-y-2">
            <Link to="product">Products</Link>
            <Link to="faqs">FAQs</Link>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white font-semibold">Social</h1>
        <div className="flex gap-x-3">
          <Link
            to="https://www.youtube.com"
            className="text-gray-500 font-semibold text-xl"
          >
            {youTubeIcon}
          </Link>
          <Link
            to="https://www.whatsapp.com"
            className="text-gray-500 font-semibold text-xl"
          >
            {whatsAppIcon}
          </Link>
          <Link
            to="https://www.instagram.com"
            className="text-gray-500 font-semibold text-xl"
          >
            {instagramIcon}
          </Link>
          <Link
            to="https://www.skye.com"
            className="text-gray-500 font-semibold text-xl"
          >
            {skypeIcon}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
