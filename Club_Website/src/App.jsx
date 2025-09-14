import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeVerticals from "./components/HomeVerticals";


function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold ">
        <Navbar />
        <HomeVerticals />

      </h1>


      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
