import React from "react";
import bgImage from "../../assets/images/slider-bg.jpg";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <>
      <section
        className="w-full h-[150vh] bg-red-300 bg-center bg?>   z-100 "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-[60%] sm:w-[40%] h-[100%] sm:h-[50%] flex justify-center  ml-10 flex-col gap-y-20"> 
          <div className="mt-0 sm:mt-40">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Best Jewellery Collection</h1>
         
            <p className=" text-sm sm:text-lg text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
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
