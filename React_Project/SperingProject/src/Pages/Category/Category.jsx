import React from "react";
import categoryImage1 from "../../assets/images/c1.png";
import categoryImage2 from "../../assets/images/c2.png";
import categoryImage3 from "../../assets/images/c3.png";
import categoryImage4 from "../../assets/images/c4.png";
import categoryImage5 from "../../assets/images/c5.png";
import categoryImage6 from "../../assets/images/c6.png";

const Category = () => {
  return (
    <>
      <section className="w-full  bg-[#1cbbb4] flex  justify-center">
        <div className="flex flex-col  items-center w-full sm:w-[90%] ">
          <div className="mt-16 text-center">
            <h1 className="text-5xl font-semibold ">Category</h1>
            <div className="w-52 h-[1px] bg-slate-200 mt-5"></div>
          </div>
          <div className="w-full sm:w-[80%] flex flex-wrap gap-28 justify-center sm:justify-between items-center mt-10 mb-32">
            <div className="flex flex-col justify-center items-center ">
              <img className="w-[50%]" src={categoryImage1} alt="" />
              <h3 className="mt-3 text-2xl ">Design & Arts</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img className="w-[40%]" src={categoryImage2} alt="" />
              <h3 className="mt-3 text-2xl ">Web Development</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img className="w-[50%]" src={categoryImage3} alt="" />
              <h3 className="mt-3 text-2xl ">SEO Markting</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img className="w-[50%]" src={categoryImage4} alt="" />
              <h3 className="mt-3 text-2xl ">Video Edting</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img className="w-[35%]" src={categoryImage5} alt="" />
              <h3 className="mt-3 text-2xl ">Logo Design</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img className="w-[50%]" src={categoryImage6} alt="" />
              <h3 className="mt-3 text-2xl">Game Design</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
