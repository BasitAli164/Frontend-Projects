import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag, faL } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isHome, setIsHome] = useState(true);
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  const shopingBag = <FontAwesomeIcon icon={faShoppingBag} />;
  return (
    <>
      <div className="container  px-10 flex justify-between items-center w-full h-20 bg-[#e9e9e9] animate-pulse">
        <div>
          <h1 className="text-gray-500 text-2xl font-semibold">
            <span className="text-orange-500">Little</span> Fashion
          </h1>
        </div>
        <div>
          <nav>
            <ul className="flex gap-x-5 animate-bounce">
              <li onClick={() => setIsHome(true)}>
                <Link
                  to="/"
                  className={`${
                    isHome
                      ? "text-orange-500 underline decoration-[2px] decoration-gray-500 font-semibold"
                      : "text-gray-500 font-semibold hover:text-orange-500 hover:underline hover:decoration-[2px] hover:decoration-gray-500 "
                  }`}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setIsHome(false)}>
                <Link
                  to="/story"
                  onClick={() => setIsHome(false)}
                  className="text-gray-500 font-semibold  hover:text-orange-500 hover:underline hover:decoration-[2px] hover:decoration-gray-500 focus:text-orange-500 focus:underline focus:decoration-gray-500 focus:decoration-[2px] "
                >
                  Story
                </Link>
              </li>
              <li onClick={() => setIsHome(false)}>
                <Link
                  to="/products"
                  onClick={() => setIsHome(false)}
                  className="text-gray-500 font-semibold hover:text-orange-500 hover:underline hover:decoration-[2px] hover:decoration-gray-500 focus:text-orange-500 focus:underline focus:decoration-gray-500 focus:decoration-[2px]"
                >
                  Products
                </Link>
              </li>
              <li onClick={() => setIsHome(false)}>
                <Link
                  to="/faqs"
                  onClick={() => setIsHome(false)}
                  className="text-gray-500 font-semibold hover:text-orange-500 hover:underline hover:decoration-[2px] hover:decoration-gray-500 focus:text-orange-500 focus:underline focus:decoration-gray-500 focus:decoration-[2px] "
                >
                  FAQs
                </Link>
              </li>
              <li onClick={() => setIsHome(false)}>
                <Link
                  to="/contact"
                  onClick={() => setIsHome(false)}
                  className="text-gray-500 font-semibold hover:text-orange-500 hover:underline hover:decoration-[2px] hover:decoration-gray-500 focus:text-orange-500 focus:underline focus:decoration-gray-500 focus:decoration-[2px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-x-5">
          <Link className="text-gray-500 hover:text-orange-500">
            {userIcon}
          </Link>
          <Link className="text-gray-500 hover:text-orange-500">
            {shopingBag}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
