import Login from "./pages/Loginpage/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signuppage/Signup";
import Notfound from "./pages/Errorpage/Notfound";
import Homepage from "./pages/Homepage/Homepage";
import Requireduser from "./componenets/Requireduser";
import Feed from "./componenets/Feed/Feed";
import Profile from "./componenets/Profile/Profile";
import Comment from "./componenets/Comment/Comment";
import Updateprofile from "./componenets/updateProfile/Updateprofile";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state.appConfigReducer.isLoading);

  const loadingref = useRef();

  useEffect(() => {
    if (isLoading) {
      loadingref?.current?.continuousStart();
    } else {
      loadingref?.current?.complete();
    }
  }, [isLoading]);
  return (
    <div className="App">
      <LoadingBar color="#f11946" ref={loadingref} />
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route element={<Requireduser />}>
          <Route element={<Homepage />}>
            <Route path="/" element={<Feed />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/updateProfile" element={<Updateprofile />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
