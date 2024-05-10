import Login from "./pages/Loginpage/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signuppage/Signup";
import Notfound from "./pages/Errorpage/Notfound";
import Homepage from "./pages/Homepage/Homepage";
import Requireduser from "./componenets/Requireduser";
import Feed from "./componenets/Feed/Feed";
import Profile from "./componenets/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route element={<Requireduser />}>
          <Route element={<Homepage />}>
            <Route path="/" element={<Feed />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
