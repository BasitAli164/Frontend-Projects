import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({ toggles }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <section className="bg-[rgba(1,1,0,0.88)] h-24 relative">
        <section className="absolute top-6 left-3">
          <Link to="/" className="text-white text-3xl font-bold">
            Healet
          </Link>
        </section>
        <section>
          <div className="fixed top-6 right-5 z-10">
            {toggle === false ? (
              <div className="w-10 h-10 bg-white rounded-full text-center">
                <span
                  className="text-3xl cursor-default text-black"
                  onClick={handleToggle}
                >
                  &#9776;
                </span>
              </div>
            ) : (
              <div className="w-10 h-10 bg-black  rounded-full text-center">
                <span
                  className="text-3xl  cursor-default text-white font-bold "
                  onClick={handleToggle}
                >
                  &#10005;
                </span>
              </div>
            )}
          </div>
          {toggle && (
            <div className="w-full h-[1000vh]  flex justify-center  relative bg-black ">
              <ul className="text-center h-screen fixed top-[30%] left-[50%] animate-pulse ">
                <li className="list-none my-2">
                  <Link
                    className="text-2xl font-semibold uppercase duration-[.5s] text-slate-50 hover:text-orange-500"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="list-none my-2">
                  <Link
                    className="text-2xl font-semibold uppercase duration-[.5s] text-slate-50 hover:text-orange-500"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="list-none my-2">
                  <Link
                    className="text-2xl font-semibold uppercase duration-[.5s] text-slate-50 hover:text-orange-500"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li className="list-none my-2">
                  <Link
                    className="text-2xl font-semibold uppercase duration-[.5s] text-slate-50 hover:text-orange-500"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Header;
