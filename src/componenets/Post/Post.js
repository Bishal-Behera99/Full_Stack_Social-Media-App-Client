import React, { useEffect, useState } from "react";
import "./Post.scss";
import Avatar from "../avatar/Avatar";
import pizza from "../../assests/bg2.jpg";
import { FaCommentAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeunlike } from "../../Redux/slices/postSlice";
function Post({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [islike, setislike] = useState("");
  const userProfile = useSelector(
    (state) => state.postSliceReducer.userProfile
  );

  function handlelike(e) {
    e.preventDefault();

    dispatch(likeunlike({ postImg: post._id }));
  }

  return (
    <div className="Post">
      <div className="header-part">
        <Avatar src={post?.avatar?.url} />
        <h3>{`${post?.owner?.name}`}</h3>
      </div>
      <div className="content">
        <img src={post?.image?.url ? post?.image?.url : pizza} alt="post-img" />
      </div>
      <div className="footer">
        <div
          className="likes"
          onClick={handlelike}
          // style={{ border: "1px solid red" }}
        >
          {post?.isLiked ? (
            <AiFillHeart className="icon" />
          ) : (
            <FaRegHeart className="icon" />
          )}

          <FaCommentAlt
            className="icon"
            onClick={() => navigate(`/comment/${post._id}`)}
          />
        </div>
        <h4 style={{ marginTop: "5px" }}>{`${post?.likesCount} likes`}</h4>
        <p className="caption">{`${post?.caption}`}</p>
        <h6 className="time">4 hrs ago</h6>
      </div>
    </div>
  );
}

export default Post;
