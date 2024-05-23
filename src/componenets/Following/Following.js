import React from "react";
import Avatar from "../avatar/Avatar";
import "./Following.scss";
import { followUnfollow } from "../../Redux/slices/Feedslice";
import { getuserProfile } from "../../Redux/slices/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Following({ src }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleclick(e) {
    e.preventDefault();

    dispatch(followUnfollow({ followersId: src._id }));
  }

  return (
    <div className="Following">
      <Avatar src={src?.avatar?.url} />
      <h4 onClick={() => navigate(`/profile/${src._id}`)}>{src?.name}</h4>
      <h4 className="hover-link follow-link" onClick={handleclick}>
        unfollow
      </h4>
    </div>
  );
}

export default Following;
