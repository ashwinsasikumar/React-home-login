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
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}
export default App;
