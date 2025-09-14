import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold ">
        <Navbar />
      </h1>

      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
