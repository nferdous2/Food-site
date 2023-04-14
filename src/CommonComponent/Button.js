import React from "react";

const Button = ({ title, backColor, textColor }) => {
  return (
    <div className="text-center">
      <button
        className={` ${backColor}  ${textColor} font-bold py-2 px-4 w-80 h-16 mt-8 mb-5 rounded-full mx-auto`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
