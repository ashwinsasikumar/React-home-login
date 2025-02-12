import About from "./pages/about";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Navigation from "./pages/Navigation";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/React-home-login/" element={<Home />} />
        <Route path="/React-home-login/About" element={<About />} />
        <Route path="/React-home-login/Login" element={<Login />} />
        <Route path="/React-home-login/Welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}
export default App;
