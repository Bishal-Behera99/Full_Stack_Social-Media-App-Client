import React from "react";
import "./Navbar1.scss";
import Avatar from "../avatar/Avatar";
import { AiOutlineLogout } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/Localstoragemanager";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../Redux/slices/appConfigSlice";
function Navbar() {
  const myProfile = useSelector((state) => state.appConfigReducer.isProfile);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handlelogoutclick(e) {
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
            onClick={() => navigate(`/profile/${myProfile?._id}`)}
          >
            <Avatar src={myProfile?.avatar?.url} />
          </div>
          <div className="logout hover-link">
            <AiOutlineLogout onClick={handlelogoutclick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
