import React from "react";
import { FaAngleLeft } from "react-icons/fa";
const PagesComponent = ({ title, title2, texts, icon: Icon }) => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div>
      <nav
        class="px-4 py-6 flex justify-between items-center"
        onClick={handleGoBack}
      >
        <div class="flex items-center ml-8">
          <FaAngleLeft size={24} />
          <h1 class="text-lg font-semibold ml-20">{title}</h1>
        </div>
      </nav>
      {/* body start */}
      <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div class="flex justify-center xl:w-1/2 mb-5 py-12 mt-8">
          <Icon class="text-gray-400 h-40 w-40 sm:w-[24rem] sm:h-[28rem] flex-shrink-0 object-cover" />
        </div>
        <div class="mt-2 text-center">
          <h1 class="font-bold text-3xl">{title2}</h1>
          <p class="mt-2 text-2xl text-gray-500  ">{texts}</p>
        </div>
      </div>
    </div>
  );
};

export default PagesComponent;
