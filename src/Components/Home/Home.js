import React from "react";
import { FaAlignLeft, FaHome, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import dish1 from "../../image/dish1.png";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-hidden bg-backgroundColor">
      {/* nav bar  */}
      <nav class="px-4 py-6 lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
          <FaAlignLeft class="mx-2" size={24} />
          <FiShoppingCart class="mx-2 text-gray-400" size={24} />
        </div>
      </nav>
      {/* search start */}
      <section className="p-6">
        <h1 className="font-bold text-3xl text-left">
          Delicious <br className="lg:hidden" /> Food For You
        </h1>
        <div className="flex items-center mt-8">
          <input
            type="email"
            className="w-full  py-4 pl-12  text-gray-700 rounded-full bg-searchbg"
            placeholder="Search"
          />
          <FaSearch className="absolute mx-5" size={20} />
        </div>
      </section>
      {/* body start  */}
      <nav>
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <p class="text-orange-500 border-b-2 font-bold border-orange-500 ml-20 mx-5">
            Foods
          </p>

          <p class=" text-gray-400 border-b-2 border-transparent mx-5">
            Drinks
          </p>

          <p class=" text-gray-400 border-b-2 border-transparent mx-5">
            Snacks
          </p>

          <p class=" text-gray-400 border-b-2 border-transparent  text-clip overflow-hidden ">
            Sausage
          </p>
        </div>
      </nav>
      {/* img section  */}
      <Link to="/allfood">
        <p class="text-orange-500 text-end p-2">See More</p>
      </Link>
      <div class="grid grid-cols-2  place-content-evenly">
        <img src={dish1} alt="" class=" lg:mx-16 mx-8" />
        <img src={dish1} alt="" class="overflow-hidden mx-16" />
      </div>

      {/* Tab section */}

      <div class="fixed bottom-0 container flex items-center px-6 py-4 justify-around overflow-hidden whitespace-nowrap">
        <FaHome size={20} className="text-orange-500 mx-5" />
        <Link to="/food">
          <AiOutlineHeart size={20} className="mx-5 text-gray-500" />
        </Link>

        <Link to="/profileSidebar">
          <AiOutlineUser size={20} className="text-gray-500 mx-5" />
        </Link>
        <Link to="/history">
          <RxCounterClockwiseClock size={20} className="text-gray-500 mx-7" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
