import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeVerticals from "./components/HomeVerticals";
import Front from "./components/Front"; 

function App() {
  return (
    <div>
      <h1 className="text">
        <Navbar />
        <Front />
        <HomeVerticals />

      </h1>
    </div>
  );
}

export default App;
