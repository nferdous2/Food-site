import React from "react";
import PagesComponent from "../../CommonComponent/PagesComponent";
import { BsSearch } from "react-icons/bs";

const NotFound = () => {
  return (
    <div>
      <PagesComponent
        title="Spicy chieckns"
        title2="Item not found"
        texts="Try searching the item with a different keyword"
        icon={BsSearch}
      ></PagesComponent>
    </div>
  );
};

export default NotFound;
