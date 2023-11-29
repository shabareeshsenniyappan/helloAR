import { useState } from "react";
import SignIn from "./Pages/SignIn/SignIn";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [otp, setOtp] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
