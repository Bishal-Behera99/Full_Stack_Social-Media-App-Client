import React, { useEffect, useState } from "react";
import "./Updateprofile.scss";
import batman from "../../assests/batman.png";
import { useDispatch, useSelector } from "react-redux";
import { updateMyProfile } from "../../Redux/slices/appConfigSlice";
function Updateprofile() {
  const myProfile = useSelector((state) => state.appConfigReducer.isProfile);

  const [name, setname] = useState("");
  const [bio, setbio] = useState("Good");
  const [userimg, setuserImg] = useState("");

  const dispatch = useDispatch();
  function handleImage(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setuserImg(fileReader.result);
      }
    };
  }
  useEffect(() => {
    setname(myProfile?.name || "");
    setbio(myProfile?.bio || "");
    setuserImg(myProfile?.avatar?.url || "");
  }, [myProfile]);

  function handlesubmit(e) {
    try {
      e.preventDefault();

      dispatch(
        updateMyProfile({
          userimg,
          name,
          bio,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Updateprofile">
      <div className="left-side">
        <div className="input-user-img">
          <label htmlFor="inputImg" className="labelImg">
            <img src={userimg ? userimg : batman} alt="batman" />
          </label>
          <input
            className="inputImg"
            type="file"
            accept="image/*"
            onChange={handleImage}
            id="inputImg"
          />
        </div>
      </div>
      <div className="right-side">
        <form>
          <input
            value={name}
            type="text"
            placeholder="Enter Your name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            value={bio}
            type="text"
            placeholder="Enter Your bio"
            onChange={(e) => setbio(e.target.value)}
          />
          <input type="submit" className="btn-primary" onClick={handlesubmit} />
        </form>
        <button className="delete-account btn-primary">Delete Account</button>
      </div>
    </div>
  );
}

export default Updateprofile;
