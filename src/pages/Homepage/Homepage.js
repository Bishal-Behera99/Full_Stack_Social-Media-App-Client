import React, { useEffect } from "react";
import { axiosClient } from "../../utils/axiosClient";
import Navbar from "../../componenets/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Homepage;
