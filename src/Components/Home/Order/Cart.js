import React from "react";
import HeaderComponent from "../../../CommonComponent/HeaderComponent";
import cart1 from "../../../image/cart1.png";
import cart2 from "../../../image/cart2.png";
import { MdOutlineSwipeLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../CommonComponent/Button";

const Cart = () => {
  return (
    <div>
      <HeaderComponent title="Cart" />
      <div className="container mx-auto py-8 px-6">
        <div className="flex items-center mx-14">
          <MdOutlineSwipeLeft />
          <p className="text-gray-600 text-center">
            Swipe on an item to delete
          </p>
        </div>
        {/* item details start  */}
        <div className="mt-6 space-y-8 xl:mt-12">
          <div className="flex items-center justify-between border rounded-xl bg-white py-4 px-4 sm:w-full">
            <img
              className="w-1/3 sm:w-1/5 rounded-4 drop-shadow-xl"
              src={cart1}
              alt="Veggie tomato mix"
            />
            <div className="mx-2 flex flex-col items-center space-y-1">
              <h3 className="text-gray-700 font-medium sm:text-2xl">
                Veggie tomato mix
              </h3>
              <p className="font-bold text-orange-500">#1,900</p>
            </div>
            <div className="bg-profileColor rounded-full text-xs mt-12 text-white px-2">
              - 1 +
            </div>
          </div>
          <div className="flex items-center justify-between border rounded-xl bg-white py-4 px-4 sm:w-full">
            <img
              className="w-1/3 sm:w-1/5 rounded-4 drop-shadow-xl"
              src={cart2}
              alt="Fishwith mix orange"
            />
            <div className="mx-2 flex flex-col items-center space-y-1">
              <h3 className="text-gray-700 font-medium sm:text-2xl truncate">
                Fishwith mix orange
              </h3>
              <p className="font-bold text-orange-500">#1,900</p>
            </div>
            <div className="bg-profileColor  mt-12 rounded-full text-xs text-white px-2">
              - 1 +
            </div>
          </div>
        </div>
      </div>
      {/* link to delivery page */}
      <div className="fixed bottom-0 left-0 right-0">
        <Link to="/delivery">
          <Button
            title="Complete order"
            textColor="text-white"
            backColor="bg-profileColor"
          />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
