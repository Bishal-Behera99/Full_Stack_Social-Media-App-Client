import React, { useEffect } from "react";
import "./Comment.scss";
import Avatar from "../avatar/Avatar";
import { useDispatch } from "react-redux";
import { getuserProfile } from "../../Redux/slices/postSlice";
import { axiosClient } from "../../utils/axiosClient";
import { useLocation, useParams } from "react-router-dom";
function Comment({ src }) {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    fetchcomments();
  }, []);

  async function fetchcomments() {
    const response = await axiosClient.post("/post/comment", {
      postImg: params.postId,
    });

    return response;
  }
  return (
    <div className="comment">
      <h2>Comments</h2>
      <div className="addcomment">
        <form>
          <label htmlFor="comments">Add a Comment</label>
          <input
            type="text"
            className="input-filed"
            id="comments"
            placeholder="You can comment here ...."
          />
        </form>
      </div>
      <div className="postcomment">
        <div className="heading">
          <Avatar />
          <h3>Bishal_too</h3>
        </div>
      </div>
    </div>
  );
}

export default Comment;
