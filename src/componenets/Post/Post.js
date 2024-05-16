import React from "react";
import "./Post.scss";
import Avatar from "../avatar/Avatar";
import pizza from "../../assests/bg2.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Post({ post }) {
  const navigate = useNavigate();
  return (
    <div className="Post">
      <div className="header-part">
        <Avatar />
        <h3>{`${post?.owner?.name}`}</h3>
      </div>
      <div className="content">
        <img src={post?.image?.url ? post?.image?.url : pizza} alt="post-img" />
      </div>
      <div className="footer">
        <div className="likes ">
          <FaRegHeart className="icon hover-link" />
          <FaCommentAlt className="icon" onClick={() => navigate("/comment")} />
        </div>

        <h4 style={{ marginTop: "5px" }}>{`${post?.likesCount} likes`}</h4>
        <p className="caption">{`${post?.caption}`}</p>
        <h6 className="time">4 hrs ago</h6>
      </div>
    </div>
  );
}

export default Post;
