import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <h2 className="heading">Login</h2>

        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <input type="submit" className="submit-btn" />
        </form>
        <p className="para">
          {/*  (Cannot destructure property 'basename' of)=Due to BrowserRouter not imported in index.js  */}
          Dont have an Account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
