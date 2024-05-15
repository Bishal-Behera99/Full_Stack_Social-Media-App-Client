import React, { useState } from "react";
import "./Createpost.scss";
import pizza from "../../assests/bg2.jpg";
import Avatar from "../avatar/Avatar";
import { BsCardImage } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/slices/appConfigSlice";
function Createpost() {
  const [postImg, setPostimg] = useState("");
  const [caption, setcaption] = useState("");
  const dispatch = useDispatch();
  function handleImage(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setPostimg(fileReader.result);
        console.log(fileReader.result);
      }
    };
  }

  async function handlepostsubmit(e) {
    try {
      dispatch(setLoading(true));
      e.preventDefault();
      const result = await axiosClient.post("/post/", {
        caption,
        postImg,
      });

      console.log("post result", result);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      dispatch(setLoading(false));
    }
  }
  return (
    <div className="Createpost">
      <div className="heading">
        <Avatar />
        <input
          type="text"
          className="captionInput"
          placeholder="Enter Your Caption"
          onChange={(e) => setcaption(e.target.value)}
        />
      </div>
      {postImg && (
        <div className="img-container">
          <img src={postImg} alt="pizza" />
        </div>
      )}

      <div className="bottom-part">
        <label htmlFor="createpost-img" className="labelimgs">
          <BsCardImage />
        </label>
        <input
          type="file"
          accept="image/*"
          id="createpost-img"
          onChange={handleImage}
          className="createpost-img"
        />
        <div className="post-btn">
          <button className=" btn-primary" onClick={handlepostsubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
