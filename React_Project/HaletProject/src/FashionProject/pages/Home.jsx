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
  const [count,setCount]=useState(0)
  const [data,setData]=useState(dataInfo[count])
  console.log("data is:",data)
  const handler=()=>{
    if(dataInfo.length>0 && dataInfo.length<4){
      setCount(count+1)
      setData(dataInfo[count+1])
      
    }else if(dataInfo>4){
      setCount(0)
      setData(dataInfo[0])
    }

  }
  return (
    <div className="w-full h-[820px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${data.image})`}}>

    </div> 
  );
};

export default Home;
