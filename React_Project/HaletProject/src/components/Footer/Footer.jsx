import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full  bg-[#160e0b]">
        <section className="flex flex-col justify-center p-10">
          <div className="">
            <div className="ml-10 relative flex">
              <input
                className="w-[60%] h-12 active:outline-none active:border-none border-none outline-none text-xl"
                type="text"
                placeholder="Enter your email"
              />
              <span className="text-white block w-16 h-12 bg-[#fd9c6b] text-center text-3xl hover:border-t-transparent hover:text-[#fd9c6b] hover:border-[2px] hover:border-[#fd9c6b] hover:border-solid font-bold cursor-pointer">
                &#8594;
              </span>
              <div>
                
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
