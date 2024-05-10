import React from "react";
import Avatar from "../avatar/Avatar";
import "./Following.scss";
function Following() {
  return (
    <div className="Following">
      <Avatar />
      <h4>Rahul</h4>
      <h4 className="hover-link follow-link">unfollow</h4>
    </div>
  );
}

export default Following;
