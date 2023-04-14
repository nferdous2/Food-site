import React from "react";
import dish3 from "../../../image/dish3.png";
import dish4 from "../../../image/dish4.png";

import dish5 from "../../../image/dish5.png";
import dish6 from "../../../image/dish6.png";
import HeaderComponent from "../../../CommonComponent/HeaderComponent";

const AllFood = () => {
  return (
    <div>
      <HeaderComponent title="Spicy chieckns" />

      <section class="bg-food rounded-xl">
        <h1 class="text-3xl text-center font-bold mb-6"> Found 6 Results</h1>
        <div class="mx-auto  px-4 py-4">
          {/* imgese start from here  */}
          <div class="flex justify-around">
            <div class="grid grid-cols-1 md:grid-cols-2 ">
              <img src={dish3} alt="" class="w-full" />
              <img src={dish6} alt="" class="w-full" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 mt-8">
              <img src={dish5} alt="" class="w-full" />
              <img src={dish4} alt="" class="w-full" />
            </div>
          </div>
          <div class="flex justify-around">
            <div class="grid grid-cols-1 md:grid-cols-2 ">
              <img src={dish3} alt="" class="w-full" />
              <img src={dish6} alt="" class="w-full" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 mt-8">
              <img src={dish5} alt="" class="w-full" />
              <img src={dish4} alt="" class="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllFood;
