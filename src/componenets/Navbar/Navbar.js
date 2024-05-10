import React from "react";
import "./Navbar1.scss";
import Avatar from "../avatar/Avatar";
import { AiOutlineLogout } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/Localstoragemanager";
function Navbar() {
  const navigate = useNavigate();
  function handleclick(e) {
    e.preventDefault();
    removeItem(KEY_ACCESS_TOKEN);
    navigate("/login");
  }

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
          <div className="logout hover-link">
            <AiOutlineLogout onClick={handleclick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
