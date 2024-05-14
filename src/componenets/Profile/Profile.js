import React from "react";
import "./Profile.scss";
import batman from "../../assests/batman.png";
import Post from "../Post/Post";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="Profile">
      <div className="left">
        <Post />
        <Post />
        <Post />
      </div>
      <div className="right">
        <div className="profile-card">
          <img className="user-img" src={batman} alt="Bat-man" />
          <h3 className="user-name">Ankush</h3>
          <div className="follower-info">
            <h4>40 followers</h4>
            <h4>12 following</h4>
          </div>
          <button className="follow btn-primary">Follow</button>
          <button
            className="update-profile btn-secondary"
            onClick={() => navigate("/updateProfile")}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
