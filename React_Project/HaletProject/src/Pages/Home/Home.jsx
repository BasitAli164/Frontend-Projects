import React from "react";
import bgImage from "../../assets/images/slider-bg.jpg";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <>
      <section
        className="w-full h-[160vh]  bg-center z-100  bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-[60%] sm:w-[40%] h-[100%] sm:h-[50%] flex sm:justify-center  ml-10 flex-col gap-y-14 sm:gap-y-20"> 
          <div className="mt-14  ">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Best Jewellery Collection</h1>
         
            <p className=" text-sm sm:text-lg text-white text-justify leading-[28px] mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          </div>
          <div>
            <Button btnText="Shop Now"/>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Home;
