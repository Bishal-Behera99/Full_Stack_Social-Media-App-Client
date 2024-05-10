import React from "react";
import { KEY_ACCESS_TOKEN, getItem } from "../utils/Localstoragemanager";
import { Navigate, Outlet } from "react-router-dom";
function Requireduser() {
  const user = getItem(KEY_ACCESS_TOKEN);
  console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default Requireduser;
