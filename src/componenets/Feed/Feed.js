import React, { useEffect } from "react";
import "./Feed.scss";
import Post from "../Post/Post";
import Following from "../Following/Following";
import Follower from "../Follower/Follower";
import { useDispatch, useSelector } from "react-redux";
import { getFeedData } from "../../Redux/slices/Feedslice";
function Feed() {
  const dispatch = useDispatch();

  const feedData = useSelector((state) => state.FeedsliceReducer.feeddata);

  useEffect(() => {
    dispatch(getFeedData());
  }, [dispatch]);
  return (
    <div className="Feed">
      <div className="left-part">
        {feedData?.posts?.map((items) => (
          <Post key={items._id} post={items} />
        ))}
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
