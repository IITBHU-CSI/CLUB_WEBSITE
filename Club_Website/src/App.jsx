import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Components and Pages
import Front from "./components/Front";
import HomeVerticals from "./components/HomeVerticals";
import Events from "./components/Events";
import Gallery from "./Pages/Gallery";
import HomePage from "./Pages/HomePage";
import OurTeam from "./Pages/OurTeam";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/events" element={<Events />} />

          <Route
            path="/front"
            element={
              <>
                <Front />
                <HomeVerticals />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
