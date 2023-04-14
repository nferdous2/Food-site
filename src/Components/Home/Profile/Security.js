import React from 'react';
import PagesComponent from '../../../CommonComponent/PagesComponent';
import Button from '../../../CommonComponent/Button';
import { BsWifiOff } from "react-icons/bs";

const Security = () => {
    return (
        <div>
             <div>
      <PagesComponent
        title2="No internet Connection"
        texts="Your internet connection is currently
not available please check or try again."
        icon={BsWifiOff}
      ></PagesComponent>
      
        <Button
          title="Try again"
          textColor="text-white	"
          backColor="bg-profileColor"
        />
    </div>
        </div>
    );
};

export default Security;