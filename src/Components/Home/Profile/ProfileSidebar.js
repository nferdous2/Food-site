import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiCartAdd, BiNews, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineLocalOffer, MdSecurity } from "react-icons/md";

const ProfileSidebar = () => {

  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div>
    <aside class="flex flex-col w-screen h-screen px-4 py-8 overflow-x-hidden overflow-y-auto bg-profileColor text-white">
      <nav class="flex  flex-col gap-5 divide-y divide-slate-200 mt-12 mx-3">
        <Link to="/profile" class="flex items-center py-2">
          <CgProfile class="mr-4" size={24} />
          <p class="font-medium">Profile</p>
        </Link>
  
        <Link to="/orders" class="flex items-center py-2">
          <BiCartAdd class="mr-4" size={24} />
          <p class="font-medium">Orders</p>
        </Link>
  
        <Link to="/offer"  class="flex items-center py-2">
          <MdOutlineLocalOffer class="mr-4" size={24} />
          <p class="font-medium">Offer and Promo</p>
        </Link>
  
        <a href="#" class="flex items-center py-2">
          <BiNews class="mr-4" size={24} />
          <p class="font-medium">Privacy and policy</p>
        </a>
  
        <Link to="/security" class="flex items-center py-2">
          <MdSecurity class="mr-4" size={24} />
          <p class="font-medium">Security</p>
        </Link>
      </nav>
  
      <a href="#" class="flex items-center py-2 mt-auto" onClick={handleGoBack}>
        <span class="mr-2 font-medium">Sign out</span>
        <BiRightArrowAlt size={24} />
      </a>
    </aside>
  </div>
  
  );
};

export default ProfileSidebar;
