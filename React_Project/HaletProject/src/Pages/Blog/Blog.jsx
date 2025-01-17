import React from "react";
import image1 from "../../assets/images/b1.jpg";
import image2 from "../../assets/images/b2.jpg";

const Blog = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center flex-col mb-20 gap-20">
        <div className="mt-10">
          <h1 className="text-black text-[32px] font-bold uppercase">
            Latest From Blog
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center max-w-[1024px] gap-10">
          <div className=" bg-[#eeeeee] shadow-2xl border-[1px] border-solid border-black  relative">
            <div className="after:w-20 after:h-20 after:bg-black after:contents-['14 July'] after:text-white after:border-[2px] after:box-border after:z-50 after:border-solid after:absolute after:bottom-48 after:left-5">
              <img className="w-full" src={image1} alt="" />
            </div>
            <div className="p-10 flex flex-col gap-3">
              <h4 className="text-[24px] text-black font-semibold">Look even slightly believable. If you are</h4>
              <p>
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
              </p>
              <div>
              <button className="px-10 py-[5px] sm:px-14  sm:py-[10px] text-[#000]  text-lg border-[1px] border-solid border-[#000] hover:text-white hover:bg-[#000] duration-[.5s]">
                Read More
              </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Blog;
