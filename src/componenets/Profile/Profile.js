import React, { useEffect, useState } from "react";
import "./Profile.scss";
import batman from "../../assests/batman.png";
import Post from "../Post/Post";
import { useNavigate, useParams } from "react-router-dom";
import Createpost from "../createpost/Createpost";
import { useDispatch, useSelector } from "react-redux";
import { getuserProfile } from "../../Redux/slices/postSlice";
function Profile() {
  const userProfile = useSelector(
    (state) => state.postSliceReducer.userProfile
  );
  const myProfile = useSelector((state) => state.appConfigReducer.isProfile);

  const [isProfile, setisProfile] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuserProfile({ userId: params.userId }));
    if (myProfile?._id == params.userId) {
      setisProfile(true);
    } else {
      setisProfile(false);
    }
  }, [myProfile, params.userId]);
  return (
    <div className="Profile">
      <div className="left">
        <Createpost />
        {userProfile?.posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <div className="right">
        <div className="profile-card">
          <img
            className="user-img"
            src={userProfile?.avatar?.url ? userProfile?.avatar?.url : batman}
            alt="Bat-man"
          />
          <h3 className="user-name">{userProfile?.name}</h3>
          <div className="follower-info">
            <h4>{`${userProfile?.followers?.length} followers`}</h4>
            <h4> {`${userProfile?.followings.length} following`}</h4>
          </div>
          {!isProfile && <button className="follow btn-primary">Follow</button>}
          {isProfile && (
            <button
              className="update-profile btn-secondary"
              onClick={() => navigate("/updateProfile")}
            >
              Update Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
