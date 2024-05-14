import React, { useEffect } from "react";
import { axiosClient } from "../../utils/axiosClient";
import Navbar from "../../componenets/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMyprofile } from "../../Redux/slices/appConfigSlice";

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyprofile());
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Homepage;
