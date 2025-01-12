import React from "react";
import categoryImage1 from "../../assets/images/c1.png";
import categoryImage2 from "../../assets/images/c2.png";
import categoryImage3 from "../../assets/images/c3.png";

const Category = () => {
  return (
    <>
      <section className="w-full h-screen bg-[#1cbbb4] flex  justify-center">
        <div className="flex flex-col  items-center w-full sm:w-[90%] border-2 bg-rose-500">
          <div className="mt-20 text-center">
            <h1 className="text-3xl font-semibold border-b-2 border-slate-300">
              Category
            </h1>
          </div>
          <div className="w-[80%] flex flex-wrap gap-28 justify-between items-center mt-16 bg-slate-400">
            <div className="flex flex-col justify-center items-center bg-red-300">
              <img className="w-[50%]" src={categoryImage1} alt="" />
              <h3 className="mt-3 text-2xl font-semibold">Design & Arts</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-300">
              <img className="w-[50%]" src={categoryImage2} alt="" />
              <h3 className="mt-3 text-2xl font-semibold">Web Development</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-300">
              <img className="w-[90%]" src={categoryImage3} alt="" />
              <h3 className="mt-3 text-2xl font-semibold">SEO Markting</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
