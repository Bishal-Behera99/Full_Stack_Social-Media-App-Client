import React from "react";
import { NavLink } from "react-router-dom";

function Notfound() {
  return (
    <div
      style={{
        height: "100vh",
        // border: "2px solid red",
        textAlign: "center",
        margin: "auto",
        background: "grey",
        display: "flex",
        flexDirection: "Column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px",
      }}
    >
      <h1>404 Page Not Found</h1>
      <p>Sorry ,This Page Is Not Valid</p>

      <NavLink to="/" style={{ color: "pink" }}>
        Go Back
      </NavLink>
    </div>
  );
}

export default Notfound;
