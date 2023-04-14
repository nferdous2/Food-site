import React from "react";
import logo from "../../image/icon.png";
import Button from "../../CommonComponent/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section class="h-screen">
      <div class="flex flex-col items-center justify-center">
        <form class="w-full max-w-md">
          <div
            class="bg-white rounded-b-3xl w-full"
            style={{ top: 0, left: 0 }}
          >
            <img
              class="flex justify-center mx-auto  w-full md:w-1/2 lg:w-full"
              src={logo}
              alt=""
            />

            <div class="flex items-center justify-center mt-6">
              <p class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-orange-500 dark:border-orange-400 dark:text-white">
                Login
              </p>
              <p class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize  dark:text-gray-300">
                sign-up
              </p>
            </div>
          </div>

          <div className="mt-8 p-2">
            <div className="mb-6 md:m-auto">
              <label className="text-gray-400 font-bold mb-2 block text-left  py-2 px-3 ">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="border-b-2 rounded w-full py-2 px-3 text-gray-700 focus:outline-none border-black bg-transparent"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-400 font-bold mb-2 text-left  py-2 px-3 "
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border-b-2 rounded w-full py-2 px-3 text-gray-700 focus:outline-none border-black bg-transparent"
              />
            </div>

            <p className="mt-6 text-center text-sm flex items-center text-orange-400 font-bold">
              Forgot password?
            </p>
              <Link to="/home">
                <Button
                  title="Login"
                  textColor="text-white	"
                  backColor="bg-profileColor"
                />
              </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
