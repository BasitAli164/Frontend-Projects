import React, { useState } from "react";
import nextIcon from "../../assets/images/next.png";
import prevIcon from "../../assets/images/prev.png";
import sliderImage1 from "../../assets/images/client.jpg";
import sliderImage2 from "../../assets/images/profile.jpg";
import sliderImage3 from "../../assets/images/me.jpg";

const Slider = () => {
  const sliderContent = [
    {
      img: sliderImage1,
      name: "Samantha Jonas",
      description:
        "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: sliderImage2,
      name: "Meeth Alean",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi voluptates libero asperiores, quod similique architecto, doloremque esse quae aut dolorum",
    },
    {
      img: sliderImage3,
      name: "John Doe",
      description:
        "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable",
    },
  ];
  const [data, setData] = useState(0);
  const handleNext = () => {
    setData((currentIndex) => (currentIndex + 1) % sliderContent.length);
  };
  const handlePrev = () => {
    setData(
      (currentIndex) =>
        (currentIndex - 1 + sliderContent.length) % sliderContent.length
    );
  };

  return (
    <>
      <section className=" w-full flex flex-col justify-start items-center  h-screen  gap-y-10 mb-20">
        <div className="mt-2">
          <h1 className="text-black text-[32px] font-bold tracking-[1px] uppercase">
            Testimonial
          </h1>
        </div>
        <div className="max-w-[800px] h-[350px] bg-[#160e0b] rounded-xl shadow-2xl flex flex-col justify-center items-center relative p-40">
          {sliderContent.map(
            (item, index) =>
              index === data && (
                <div key={index}>
                  <div className="flex justify-center items-center ">
                    <img
                      className="w-1/3 rounded-full border-[8px]  border-solid border-gray-600 "
                      src={item.img}
                      alt="Slider-Image"
                    />
                  </div>
                  <div className="text-center  after:content-['\201C'] after:text-white after:text-8xl after:absolute after:bottom-[-50px] lg:after:bottom-[-48px]">
                    <h3 className="text-[#fd9c6b] text-xl font-bold">
                      {item.name}
                    </h3>
                    <p className="text-[#eeeeee] text-center text-lg  ">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="flex justify-center items-center gap-10">
          <button
            className="bg-[#fd9c6b] p-3 rounded-md w-14 border-none outline-none active:outline-none hover:bg-[#160e0b] duration-[0.6s]"
            onClick={handleNext}
          >
            <img className="w-5" src={prevIcon} alt="Previous-Icon" />
          </button>
          <button
            className="bg-[#fd9c6b] p-3 rounded-md w-14 border-none outline-none active:outline-none hover:bg-[#160e0b] duration-[0.6s]"
            onClick={handlePrev}
          >
            <img className="w-5" src={nextIcon} alt="Next-Icon" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Slider;
