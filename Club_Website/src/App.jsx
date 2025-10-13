import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <Router>
      <div className="text">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

