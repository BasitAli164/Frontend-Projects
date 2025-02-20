import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag, faL } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isHome,setIsHome]=useState(true)
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  const shopingBag = <FontAwesomeIcon icon={faShoppingBag} />;
  return (
    <>
      <div className="container  px-10 flex justify-between items-center w-full h-20 bg-black">
        <div>
          <h1 className="text-white text-2xl font-semibold">
            <span className="text-orange-300">Little</span> Fashion
          </h1>
        </div>
        <div>
          <nav>
            <ul className="flex gap-x-5">
              <li onClick={()=>setIsHome(true)}>
                <Link to="/" className={`${isHome?'text-orange-300 underline decoration-[2px] decoration-gray-500 font-semibold':'text-white font-semibold hover:text-orange-300 hover:underline hover:decoration-[2px] hover:decoration-gray-500'}`}>
                  Home
                </Link>
              </li>
              <li onClick={()=>setIsHome(false)}>
                <Link
                  to="/story"
                  onClick={() => setIsHome(false)}
                  className="text-white font-semibold hover:text-orange-300 hover:underline hover:decoration-[2px] hover:decoration-gray-500 "
            
                >
                  Story
                </Link>
              </li>
              <li onClick={()=>setIsHome(false)}>
                <Link
                  to="/products"
                  onClick={() => setIsHome(false)}
                  className="text-white font-semibold hover:text-orange-300 hover:underline hover:decoration-[2px] hover:decoration-gray-500 "
            
                >
                  Products
                </Link>
              </li>
              <li onClick={()=>setIsHome(false)}>
                <Link
                  to="/faqs"
                  onClick={() => setIsHome(false)}
                  className="text-white font-semibold hover:text-orange-300 hover:underline hover:decoration-[2px] hover:decoration-gray-500 "
            
                >
                  FAQs
                </Link>
              </li>
              <li onClick={()=>setIsHome(false)}>
                <Link
                  to="/contact"
                  onClick={() => setIsHome(false)}
                  className="text-white font-semibold hover:text-orange-300 hover:underline hover:decoration-[2px] hover:decoration-gray-500 "
            
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-x-5">
          <div className="text-white hover:text-orange-300 hover:cursor-pointer">
            {userIcon}
          </div>
          <div className="text-white hover:text-orange-300 hover:cursor-pointer">
            {shopingBag}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
