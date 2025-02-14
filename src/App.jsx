import About from "./pages/about";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/React-home-login/" element={<Home />} />
        <Route path="/React-home-login/About" element={<About />} />
        <Route path="/React-home-login/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
