import Login from "./pages/Loginpage/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signuppage/Signup";
import Notfound from "./pages/Errorpage/Notfound";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
