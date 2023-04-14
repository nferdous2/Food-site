import React from "react";
import { TiClipboard } from "react-icons/ti";
import Button from "../../CommonComponent/Button";
import { Link } from "react-router-dom";
import PagesComponent from "../../CommonComponent/PagesComponent";

const History = () => {
  return (
    <div>
      <PagesComponent
        title="History"
        title2="No history yet"
        texts="Hit the orange button down
below to Create an order"
        icon={TiClipboard}
      ></PagesComponent>
      
      {/* bavk to home page  */}
        <Link to="/home">
          <Button
            title="Start ordering"
            textColor="text-white	"
            backColor="bg-profileColor"
          />
        </Link>
    </div>
  );
};

export default History;
