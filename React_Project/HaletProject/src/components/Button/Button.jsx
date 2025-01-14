import React from "react";

const Button = ({ btnText, borderRadius }) => {
  return (
    <>
      <button
        className="px-10 py-[5px] sm:px-14  sm:py-[10px] text-[#fd9c6b] bg-transparent text-lg border-[1px] border-solid border-[#fd9c6b] hover:text-white hover:bg-[#fd9c6b] duration-[.5s]"
        style={{ borderRadius: `${borderRadius}` }}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
