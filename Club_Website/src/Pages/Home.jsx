import React from "react";
import Navbar from "../components/Navbar";
import Front from "../components/Front";
import HomeVertical from "../components/HomeVerticals";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text">
          <Navbar />
          <Front />
          <HomeVertical />
          <Footer />
        </h1>
      </div>
    </div>
  );
};

export default Home;
