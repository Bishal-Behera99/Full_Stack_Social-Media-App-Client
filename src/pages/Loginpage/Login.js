import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/Localstoragemanager";
function Login() {
  // const [name,setname]=useState("")
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handlesubmit(e) {
    try {
      e.preventDefault();
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      setItem(KEY_ACCESS_TOKEN, response.result.accesstoken);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login">
      <div className="login-box">
        <h2 className="heading">Login</h2>

        <form onSubmit={handlesubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <input type="submit" className="submit-btn" onClick={handlesubmit} />
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
