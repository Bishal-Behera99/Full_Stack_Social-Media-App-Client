import React from "react";
import "./Navbar1.scss";
import Avatar from "../avatar/Avatar";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <div className="container">
        <h2 className="banner hover-link" onClick={() => navigate("/")}>
          Social Media
        </h2>
        <div className="right-side">
          <div
            className="profile"
            onClick={() => navigate("/profile/bkbsdkjb")}
          >
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
