import React from "react";
import HeaderComponent from "../../../CommonComponent/HeaderComponent";
import profilepic from "../../../image/profile.png";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import Button from "../../../CommonComponent/Button";
const Profile = () => {
  function CustomButton({ title }) {
    return (
      <div class="p-4 bg-white rounded-full mt-5">
        <button class="flex items-center justify-between w-full">
          <h1 class="font-bold">{title}</h1>
          <SlArrowRight size={20} />
        </button>
      </div>
    );
  }
  return (
    
    <div>

      <HeaderComponent />
      <section>
        <div class="container px-6  mx-auto">
          <h1 class="font-bold text-left text-3xl">My Profile</h1>

          <div class="mx-auto my-4 font-bold flex justify-between">
            <p>Personal details</p>
            <p className="text-orange-400 text-semibold">Change</p>
          </div>

          <div class="bg-white rounded-lg grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <div class="px-2 py-4 rounded-xl flex flex-row sm:-mx-4">
              <img class="h-32 rounded-4 mx-4" src={profilepic} alt="" />
              <div class="mt-4 sm:mx-4 sm:mt-0 grid grid-cols-1 divide-y divide-gray-400">
                <h1 class="text-xl font-semibold md:text-2xl ">
                  Marvis Ighedosa
                </h1>
                <p class="mt-2 text-gray-400">Dosamarvis@gmail.com</p>
                <p class="mt-2 text-gray-400">+234 9011039271</p>
                <p class="mt-2 text-gray-400">
                  No 15 uti street off ovie palace road effurun delta state
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* profile image section ended */}
      <div class="container px-4  mx-auto">
        <CustomButton title="Orders" />
        <CustomButton title="Pending" />
        <CustomButton title="Faq" />
        <CustomButton title="Help" />
      </div>
      {/* list ended */}
      <Link to="/updateProfile">
        <Button
          title="Click to Update"
          textColor="text-white	"
          backColor="bg-profileColor"
        />
      </Link>
    </div>
  );
};

export default Profile;
