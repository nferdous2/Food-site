import React from 'react';
import HeaderComponent from '../../../CommonComponent/HeaderComponent';
import { MdOutlineRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../../../CommonComponent/Button';

const Delivery = () => {
  return (
    <div>
      <HeaderComponent title="Checkout" />
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl text-left my-8 md:my-12">
          Delivery
        </h1>

        <div className="mx-auto my-4 font-bold flex justify-between">
          <p>Address details</p>
          <p className="text-orange-400 text-semibold">Change</p>
        </div>

        <div className="bg-white rounded-lg grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="mt-4 sm:mx-4 px-2 py-4 sm:mt-0 grid grid-cols-1 divide-y divide-gray-400">
            <h1 className="text-xl md:text-2xl font-semibold">
              Marvis Ighedosa
            </h1>
            <p className="mt-2 text-gray-400">
              Km 5 refinery road oppsite re public road, effurun, delta state
            </p>
            <p className="mt-2 text-gray-400">+234 9011039271</p>
          </div>
        </div>

        <h3 className="font-bold text-xl text-center md:text-left p-4 mt-10 md:mt-12">
          Delivery Method
        </h3>

        <div className="bg-white divide-y divide-gray-400 rounded-lg grid grid-cols-1 gap-8 mt-8 md:mx-4">
          <div className="flex items-center space-x-4 p-2">
            <MdOutlineRadioButtonChecked className="text-orange-600" size={20} />
            <p>Door Delivery</p>
          </div>

          <div className="flex items-center space-x-4 p-2">
            <MdRadioButtonUnchecked className="text-gray-500" size={20} />
            <p>Pick Up</p>
          </div>
        </div>

        <div className="mx-auto my-4 flex justify-between mt-12 text-xl">
          <p>Total</p>
          <p className="font-bold">23,000</p>
        </div>

          <Link to="/payment">
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

export default Delivery;
