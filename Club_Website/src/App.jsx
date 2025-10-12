import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeVerticals from "./components/HomeVerticals";
import Front from "./components/Front";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1 className="text">
        <Navbar />
        <Front />
        <HomeVerticals />
        <Footer />
      </h1>
    </div>
  );
}

export default App;
