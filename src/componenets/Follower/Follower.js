import React, { useEffect } from "react";
import "./Follower.scss";
import Avatar from "../avatar/Avatar";
import { useDispatch } from "react-redux";
import { followUnfollow, suggestionslist } from "../../Redux/slices/Feedslice";
import { getuserProfile } from "../../Redux/slices/postSlice";
import { useNavigate } from "react-router-dom";
function Follower({ src }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {}, [src]);
  function handleclick(e) {
    e.preventDefault();

    dispatch(suggestionslist({ followersId: src._id }));
  }
  return (
    <div className="Follower">
      <Avatar src={src?.avatar?.url} />
      <h4 onClick={() => navigate(`/profile/${src._id}`)}>{src?.name}</h4>
      <h4
        className="hover-link follower-link btn-primary"
        onClick={handleclick}
      >
        Follow
      </h4>
    </div>
  );
}

export default Follower;
