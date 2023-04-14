import React from "react";
import PagesComponent from "../../CommonComponent/PagesComponent";
import Button from "../../CommonComponent/Button";
import { BsCart2 } from "react-icons/bs";

const Orders = () => {
  return (
    <div>
      <PagesComponent
        title="Orders"
        title2="No Orders yet"
        texts="Hit the orange button down
        below to Create an order"
        icon={BsCart2}
      ></PagesComponent>
                  <div className="fixed bottom-0 left-0 right-0 p-4 lg:fixed">

        <Button
          title="Start orderding"
          textColor="text-white	"
          backColor="bg-profileColor"
        />
        </div>
    </div>
  );
};

export default Orders;
