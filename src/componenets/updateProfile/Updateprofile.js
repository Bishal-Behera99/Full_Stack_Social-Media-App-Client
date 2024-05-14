import React from "react";
import "./Updateprofile.scss";
import batman from "../../assests/batman.png";
function Updateprofile() {
  return (
    <div className="Updateprofile">
      <div className="left-side">
        <img src={batman} alt="batman-img" width="40px" />
      </div>
      <div className="right-side">
        <form>
          <input type="text" placeholder="Enter Your name" />
          <input type="text" placeholder="Enter Your bio" />
          <input type="submit" className="btn-primary" />
        </form>
        <button className="delete-account btn-primary">Delete Account</button>
      </div>
    </div>
  );
}

export default Updateprofile;
