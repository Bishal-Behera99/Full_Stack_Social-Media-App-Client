import React, { useEffect, useState } from "react";
import "./Comment.scss";
import Avatar from "../avatar/Avatar";
import { useDispatch } from "react-redux";
import { getPostComments, getuserProfile } from "../../Redux/slices/postSlice";
import { axiosClient } from "../../utils/axiosClient";
import { useLocation, useParams } from "react-router-dom";
function Comment({ src }) {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    // dispatch;
  }, []);
  const [comment, setcomment] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    dispatch(getPostComments({ postImg: params.postId, comment }));
    console.log("aaa");
    dispatch(getuserProfile({ userId: location?.state?.post?._id }));
  }

  const location = useLocation();
  console.log(location.state);
  return (
    <div className="comment">
      <h2>Comments</h2>
      <div className="addcomment">
        <form>
          <label htmlFor="comments">Add a Comment</label>
          <input
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            type="text"
            className="input-filed"
            id="comments"
            placeholder="You can comment here ...."
          />
          <input
            type="submit"
            className="btn-primary"
            onSubmit={handlesubmit}
          />
        </form>
      </div>
      <div className="postcomment">
        <div className="heading">
          <Avatar />
          <h3>{location?.state?.post?.owner?.name}</h3>
        </div>
        {location?.state?.post?.comments?.map((items) => (
          <p>{items}</p>
        ))}
      </div>
    </div>
  );
}

export default Comment;
