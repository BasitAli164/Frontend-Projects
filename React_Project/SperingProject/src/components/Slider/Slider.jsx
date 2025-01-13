import React, { useState } from "react";
import prevIcon from "../../assets/images/prev.png";
import nextIcon from "../../assets/images/next.png";

const Slider = () => {
  const cardSentence = [
    {
      heading: "John Hissona",
      sentence:
        "passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    },
    {
      heading: "Basit Ali",
      sentence:
        "If you want to use the map method while still showing only one data item at a time, you can use conditional rendering within the map function to determine which item to display based on the currentIndex. Here's the updated code",
    },
    {
      heading: "Apo Ali ",
      sentence:
        "Now, only one data item will be shown at a time. Clicking the Next icon will show the next item, and clicking the Previous icon will show the previous item. The navigation loops when reaching the end or the start of the array.",
    },
  ];
  const [data, setData]=useState(0);

  const handlePrev=()=>{
    setData((prevData)=>prevData===0?cardSentence.length-1:prevData-1);
  }
  const handleNext=()=>{
    setData((prevData)=>(prevData===cardSentence.length-1 ? 0 :prevData+1));
  }

  return (
    <>
      <section className="hidden sm:block w-full h-auto bg-white p-20">
        <section className="flex justify-center items-center ">
          <div className="w-[75%] h-[50%] p-16  bg-slate-100 mb-20 shadow-2xl relative">
            <div className="text-center  p-10 shadow-2xl">
              {cardSentence.map((item, index) => (
                index===data &&(
                    <>
                    <h1 key={Math.random()} className="text-5xl leading-[100px] text-black">
                    {item.heading}
                  </h1>
                  <p key={Math.random()} className="text-xl text-black text-justify">
                    {item.sentence}
                  </p>
                    </>
                )
              ))}
            </div>
            <div className="absolute top-[100px] left-0 flex justify-between items-center w-[100%] h-[50%]">
              <div className="w-[50px] h-[50px] rounded-full bg-[#1a2e35] flex justify-center items-center" onClick={handlePrev}>
                <img src={prevIcon} alt="Previous-Icon" />
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#1a2e35] flex justify-center items-center" onClick={handleNext}>
                <img src={nextIcon} alt="Next-Icon" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Slider;
