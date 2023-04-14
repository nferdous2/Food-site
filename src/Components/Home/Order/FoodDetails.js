import React from "react";
import HeaderComponent from "../../../CommonComponent/HeaderComponent";
import Button from "../../../CommonComponent/Button";
import foodpic from "../../../image/food.png";
import { Link } from "react-router-dom";
const FoodDetails = () => {
  return (
    <div>
      <HeaderComponent />
      <div class="flex justify-center items-center">
  <div class="overflow-hidden max-w-3xl mx-auto">
    <img class="h-30 drop-shadow-2xl mx-auto max-w-sm" src={foodpic} alt="" />

    <div class="p-6">
      <p class="text-3xl text-center">Veggie tomato mix</p>
      <p class="text-2xl font-bold text-center text-orange-600">N1,900</p>
      <div class="mt-4 p-2">
        <p class="text-xl font-bold">Delivery info</p>
        <p class="mx-1  text-gray-600">
          Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
        </p>
      </div>
      <div class="mt-4 p-2">
        <p class="text-xl font-bold">Return policy</p>
        <p class="mx-1  text-gray-600">
          All our foods are double checked before leaving our stores so by any case
          you found a broken food please contact our hotline immediately.{" "}
        </p>
      </div>
      <Link to="/cart" >
        <Button
          title="Add to cart"
          textColor="text-white	"
          backColor="bg-profileColor"
        />
      </Link>

    </div>
  </div>
</div>


    </div>
  );
};

export default FoodDetails;
