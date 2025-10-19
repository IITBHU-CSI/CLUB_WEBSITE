import Front from "../components/Front";
import HomeVerticals from "../components/HomeVerticals";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-yellow-50 to-amber-100">
        <Front />
        <HomeVerticals />
      </div>
    </>
  );
};

export default HomePage;
