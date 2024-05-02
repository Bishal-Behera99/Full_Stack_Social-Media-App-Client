import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
function Signup() {
  return (
    <div className="signup">
      <div className="signup-box">
        <h2 className="heading">SignUp</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="Email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <input type="submit" className="my-btn" />
        </form>
        <p>
          Have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
