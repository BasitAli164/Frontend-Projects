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
          <span className="text-gray-500 " >Little</span> Fashion
        </h1>
        <p className="text-gray-500 text-[1.1rem] leading-[26.4px] mt-10">Copyright © 2022 Little Fashion Designed by Tooplate</p>
      </div>
      <div>
        <h1>Sitemap</h1>
        <div>
          <Link to="/story">Story</Link>
          <Link to="privacy">Privacy Policy</Link>
          <Link to="contact">Contact</Link>
        </div>
        <div>
          <Link to="product">Products</Link>
          <Link to="faqs">FAQs</Link>
        </div>
      </div>
      <div>
        <h1>Social</h1>
        <div>
          <span>{youTubeIcon}</span>
          <span>{whatsAppIcon}</span>
          <span>{instagramIcon}</span>
          <span>{skypeIcon}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
