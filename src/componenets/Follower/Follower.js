import React from "react";
import "./Follower.scss";
import Avatar from "../avatar/Avatar";
function Follower() {
  return (
    <div className="Follower">
      <Avatar />
      <h4>Rahul</h4>
      <h4 className="hover-link follower-link">Follow</h4>
    </div>
  );
}

export default Follower;
