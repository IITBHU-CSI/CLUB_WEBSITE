// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import HomeVerticals from "./components/HomeVerticals";
// import Front from "./components/Front"; 
// import Events from "./components/Events";

// function App() {
//   return (
//     <div>
//       <h1 className="text">
//         <Navbar />
//         <Front />
//         <HomeVerticals />
        
//       </h1>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import HomeVerticals from "./components/HomeVerticals";
import Events from "./components/Events";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Front />
                <HomeVerticals />
              </>
            }
          />

          {/* Events Page */}
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
