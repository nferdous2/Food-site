import React from "react";
import backgroundImage from "../../image/cover.png";
import Button from "../../CommonComponent/Button";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center lg:bg-center  lg:mx-auto  md:mx-auto sm:mx-auto  md:w-full md:h-screen sm:w-full sm:h-full lg:h-full lg:w-3/12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Link
          to="/login"
          className="absolute bottom-8 w-full flex justify-center"
        >
          <Button
            title="Get Started"
            textColor="text-orange-500	"
            backColor="bg-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default Cover;
