import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const HeaderComponent = ({ title, title2, texts, icon: Icon }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <nav
      className="px-4 py-6 flex justify-between items-center"
      onClick={handleGoBack}
    >
      <div className="flex items-center ml-8 cursor-pointer">
        <FaAngleLeft size={24} />
        <h1 className="text-lg font-semibold ml-20">{title}</h1>
      </div>
    </nav>
  );
};

export default HeaderComponent;
