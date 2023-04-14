import React from "react";
import HeaderComponent from "../../../CommonComponent/HeaderComponent";
import profilepic from "../../../image/profile.png";
import card from "../../../image/Card.png";
import bank from "../../../image/Bank.png";

import paypal from "../../../image/payapl.png";
import {MdOutlineRadioButtonChecked} from 'react-icons/md'
import Button from "../../../CommonComponent/Button";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  return (
    <div>
      <HeaderComponent title="My profile" />
      {/* profile card start */}
      <div class="container px-6 py-10 mx-auto">
        <h3 class="font-bold text-left">Information</h3>
        <div class="bg-white rounded-lg grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div class="px-2 py-4 rounded-xl flex flex-row sm:-mx-4">
            <img class="h-32 rounded-4 mx-4" src={profilepic} alt="" />
            <div class="mt-4 sm:mx-4 sm:mt-0 grid grid-cols-1">
              <h1 class="text-xl font-semibold md:text-2xl ">
                Marvis Ighedosa
              </h1>
              <p class="mt-2 text-gray-400">Dosamarvis@gmail.com</p>
              <p class="mt-2 text-gray-400">
                No 15 uti street off ovie palace road effurun delta state
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* profile card end */}
      <h3 class="font-bold text-left p-4 text-3xl">Payment Method</h3>

          <div class="bg-white divide-y divide-gray-400 rounded-lg grid grid-cols-1 gap-8 mt-8  md:grid-cols-1 xl:grid-cols-1 mx-4">
            <div class="flex items-center space-x-4 p-2">
             
            <MdOutlineRadioButtonChecked className="text-orange-600" size={20}/>

              <img src={card} alt=" " class="w-12 h-12 rounded-full" />
              <p>Card</p>
            </div>
            <div class="flex items-center space-x-4 p-2">
            <MdOutlineRadioButtonChecked className="text-gray-500"size={20}/>

              <img src={bank} alt=" " class="w-12 h-12 rounded-full" />
              <p>Card</p>
            </div>
            <div class="flex items-center space-x-4 p-2">
            <MdOutlineRadioButtonChecked className="text-gray-500" size={20}/>

              <img src={paypal} alt=" " class="w-12 h-12 rounded-full" />
              <p>Card</p>
            </div>
      </div>
      <Link to="/home">
      <Button
          title=" Update"
          textColor="text-white	"
          backColor="bg-profileColor"
        />
      </Link>
    
      </div>
  );
};

export default UpdateProfile;
