import React from "react";
import "./Post.scss";
import Avatar from "../avatar/Avatar";
import pizza from "../../assests/bg2.jpg";
import { FaRegHeart } from "react-icons/fa6";
function Post() {
  return (
    <div className="Post">
      <div className="header-part">
        <Avatar />
        <h3>Bishal</h3>
      </div>
      <div className="content">
        <img src={pizza} alt="" />
      </div>
      <div className="footer">
        <div className="likes hover-link">
          <FaRegHeart className="icon " />
          <h4>4 likes</h4>
        </div>

        <p className="caption">This is post</p>
        <h6 className="time">4 hrs ago</h6>
      </div>
    </div>
  );
}

export default Post;
