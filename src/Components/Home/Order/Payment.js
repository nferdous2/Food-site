import React from "react";
import HeaderComponent from "../../../CommonComponent/HeaderComponent";
import {
  MdOutlineRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";
import card from "../../../image/Card.png";
import bank from "../../../image/Bank.png";
import Button from "../../../CommonComponent/Button";
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <div>
      <HeaderComponent title="Checkout" />

      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl text-left my-8 md:my-12">
          Delivery
        </h1>

        <h3 className="font-bold text-2xl md:text-4xl text-left my-8 md:my-12 mt-12">
          Payment method
        </h3>
        <div class="bg-white divide-y divide-gray-400 rounded-lg grid grid-cols-1 gap-8 mt-8  md:grid-cols-1 xl:grid-cols-1 mx-4">
          <div class="flex items-center space-x-4 p-2">
            <MdOutlineRadioButtonChecked
              className="text-orange-600"
              size={20}
            />

            <img src={card} alt=" " class="w-12 h-12 rounded-full" />
            <p>Card</p>
          </div>
          <div class="flex items-center space-x-4 p-2 h-16 mb-4 ">
            <MdOutlineRadioButtonChecked className="text-gray-500" size={20} />

            <img src={bank} alt=" " class="w-12 h-12 rounded-full" />
            <p>Card</p>
          </div>
        </div>
        <h3 className="font-bold text-xl text-left p-4 mt-4 md:mt-12">
          Delivery Method
        </h3>

        <div className="bg-white divide-y divide-gray-400 rounded-lg grid grid-cols-1 gap-8 mt-4 md:mx-4">
          <div className="flex items-center space-x-4 p-2">
            <MdOutlineRadioButtonChecked
              className="text-orange-600"
              size={20}
            />
            <p>Door Delivery</p>
          </div>

          <div className="flex items-center space-x-4 p-2 h-16">
            <MdRadioButtonUnchecked className="text-gray-500" size={20} />
            <p>Pick Up</p>
          </div>
        </div>

        <div className="mx-auto my-4 flex justify-between mt-8 text-xl">
          <p>Total</p>
          <p className="font-bold">23,000</p>
        </div>
        <Link to="/home">
          <Button
            title="Proceed to payment"
            textColor="text-white"
            backColor="bg-profileColor"
          />
        </Link>
      </div>
    </div>
  );
};

export default Payment;
