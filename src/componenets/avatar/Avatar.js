import React from "react";
import "./Avatar.scss";
import batman from "../../assests/batman.png";
function Avatar({ src }) {
  return (
    <div className="Avatar hover-link">
      <img src={src ? src : batman} alt="batman" />
    </div>
  );
}

export default Avatar;
