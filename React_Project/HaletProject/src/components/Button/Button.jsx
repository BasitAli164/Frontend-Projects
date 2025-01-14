import React from "react";

const Button = ({ btnText, borderRadius }) => {
  return (
    <>
      <button className="px-14 py-[13px] text-[#fd9c6b] border-[1px] border-dotted border-[#fd9c6b] hover:text-white hover:bg-orange-400 duration-[.5s]" style={{borderRadius:`${borderRadius}`}}>
        {btnText}
      </button>
    </>
  );
};

export default Button;
