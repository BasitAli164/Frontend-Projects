import React from "react";
import Button from "../../components/Button/Button";
import product1 from "../../assets/images/p1.png";
import product2 from "../../assets/images/p2.png";
import product3 from "../../assets/images/p3.png";
import product4 from "../../assets/images/p4.png";
import product5 from "../../assets/images/p5.png";
import product6 from "../../assets/images/p6.png";
import product7 from "../../assets/images/p7.png";
import product8 from "../../assets/images/p8.png";
import product9 from "../../assets/images/o1.jpg";
import product10 from "../../assets/images/o2.jpg";
import product11 from "../../assets/images/o3.jpg";

const Shop = () => {
  const productDetail = [
    {
      img: product1,
      alt: "Nacklace-Image",
      prouductName: "Nacklace",
      price: "$200",
      proudctStatus: "Old",
    },
    {
      img: product2,
      alt: "Nacklace-Image",
      prouductName: "Nacklace",
      price: "$300",
      proudctStatus: "New",
    },
    {
      img: product3,
      alt: "Nacklace-Image",
      prouductName: "Nacklace",
      price: "$110",
      proudctStatus: "Old",
    },
    {
      img: product4,
      alt: "Ring-Image",
      prouductName: "Ring",
      price: "$45",
      proudctStatus: "New",
    },
    {
      img: product5,
      alt: "Ring-Image",
      prouductName: "Ring",
      price: "$95",
      proudctStatus: "Old",
    },
    {
      img: product6,
      alt: "Earrings-Image",
      prouductName: "Earrings",
      price: "$70",
      proudctStatus: "New",
    },
    {
      img: product7,
      alt: "Earrings-Image",
      prouductName: "Earrings",
      price: "$400",
      proudctStatus: "New",
    },
    {
      img: product8,
      alt: "Nacklace-Image",
      prouductName: "Nacklace",
      price: "$450",
      proudctStatus: "Old",
    },
    {
      img: product9,
      alt: "Reing-Image",
      prouductName: "Ring",
      price: "$950",
      proudctStatus: "New",
    },
    {
      img: product10,
      alt: "Earring-Image",
      prouductName: "Earring",
      price: "$700",
      proudctStatus: "New",
    },
    {
      img: product11,
      alt: "HandRing-Image",
      prouductName: "HandRing",
      price: "$120",
      proudctStatus: "New",
    },
  ];
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center mb-20  gap-y-20">
        <div className="mt-10">
          <h2 className="text-[32px] font-bold  uppercase ">Latest Products</h2>
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap relative">
          {productDetail.map((item,index) => (
            <div
              className="w-[260px] h-[300px] border-[1px] bg-[#eeeeee] shadow-xl p-10 rounded-lg relative
             cursor-pointer hover:scale-[1.1] duration-[1s]"
            key={index}
            >
              <div className="bg-white w-14 h-14 rounded-full absolute top-1 left-1 flex justify-center items-center font-bold">
                {item.proudctStatus}
              </div>

              <div className="w-full h-[75%] flex justify-center items-center">
                <img
                  className="max-w-full max-h-[150px]"
                  src={item.img}
                  alt={item.alt}
                />
              </div>
              <div className="h-[20%] flex items-end justify-between ">
                <p className="text-black text-[16px] font-semibold">
                  {item.prouductName}
                </p>
                <p className="text-black text-[16px]">
                  Price:
                  <span className="text-bold text-[#fd9c6b] text-[18px]">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button btnText="View All Products" />
        </div>
      </section>
    </>
  );
};

export default Shop;
