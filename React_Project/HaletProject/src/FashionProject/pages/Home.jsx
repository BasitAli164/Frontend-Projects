import React, { useEffect, useState } from "react";
import sliderImage1 from "../../FashionProject/assets/images/slideshow/slider1.jpeg";
import sliderImage2 from "../../FashionProject/assets/images/slideshow/slider2.jpeg";
import sliderImage3 from "../../FashionProject/assets/images/slideshow/slider3.jpeg";
const dataInfo = [
  {
    id: 1,
    title: "Cool Fashion",
    description:
      "Little fashion template comes with total 8 HTML pages proivde by Tooplate website.",
    buttonText: "Learn More About Us",
    image: sliderImage1,
  },
  {
    id: 2,
    title: "New Design",
    description:
      "Please share this Little Fashion template to your friends. Thanks you for supporting us.",
    buttonText: "Explore Products",
    image: sliderImage2,
  },
  {
    id: 3,
    title: "Talk to us",
    description:
      "Toolplate is one of the best HTML CSS template websites for everyone.",
    buttonText: "Wrork with us",
    image: sliderImage3,
  },
];

const Home = () => {
  const [data, setData] = useState(0);
  const handleNext = () => {
    setData((next) => (next + 1) % dataInfo.length);
  };
  const handlePrev = () => {
    setData((prev) => (prev - 1 + dataInfo.length) % dataInfo.length);
  };

  return (
    <div>
      {dataInfo.map(
        (item, index) =>
          index === data && (
            <div
              className="w-full h-[760px] bg-cover bg-center bg-no-repeat relative bg-blend-darken"
              style={{ backgroundImage: `url(${item.image}) ` }}
            >
              <div>
                <div className="absolute top-56 left-20 w-[520px] flex flex-col items-start justify-center gap-y-8">
                  <h1 className="font-bold text-[75px] text-white">
                    {item.title}
                  </h1>
                  <p className="text-white  text-2xl ">{item.description}</p>
                  <button className="px-12 py-3 rounded-full bg-black text-white font-bold">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          )
      )}
      <div className="absolute top-[300px] right-10 flex flex-col gap-3 z-50">
        <button
          className={`rounded-full border-[5px] border-gray-500 p-[12px] bg-gray-400 focus:bg-white`}
          onClick={handleNext}
        ></button>
        <button
          className={`rounded-full border-[5px] border-gray-500 p-[12px] bg-gray-400  focus:bg-white`}
          onClick={handlePrev}
        ></button>
      </div>
    </div>
  );
};

export default Home;
