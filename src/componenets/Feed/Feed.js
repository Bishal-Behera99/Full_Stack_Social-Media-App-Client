import React from "react";
import "./Feed.scss";
import Post from "../Post/Post";
import Following from "../Following/Following";
import Follower from "../Follower/Follower";
function Feed() {
  return (
    <div className="Feed">
      <div className="left-part">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="right-part">
        <div className="following">
          <h3>You are following</h3>
          <Following />
          <Following />
          <Following />
          <Following />
        </div>
        <div className="follower">
          <h3>Suggested for you</h3>
          <Follower />
          <Follower />
          <Follower />
          <Follower />
        </div>
      </div>
    </div>
  );
}

export default Feed;
