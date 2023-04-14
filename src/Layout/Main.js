import React from "react";
import { Outlet } from "react-router-dom";
import Cover from "../Components/Home/Cover";

const Main = () => {
  return (
    <div>
      <Outlet />
      <Cover />

    </div>
  );
};

export default Main;
