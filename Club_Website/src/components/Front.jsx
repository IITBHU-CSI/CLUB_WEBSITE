import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ImageGrid from "./ImageGrid";
import Home from "./Home";

const Front = () => (
    <div className= "flex justify-center">
        <div className="w-full">
  <section className=" flex flex-col md:flex-row bg-white min-h-screen">
    {/* Left side: CSI, Typing, About */}
    <div className="flex-1 flex flex-col justify-start items-start px-3 md:pl-20 pt-24 md:pt-[70px]">
      {/* CSI Gradient Title */}
      <h1 className="text-6xl md:text-[120px] font-serif font-extrabold tracking-tight
        bg-gradient-to-r from-purple-700 via-pink-500 to-pink-700 bg-clip-text text-transparent mt-0 pt-0">
        CSI
      </h1>
      {/* Typewriter Subheading */}
      <div className="text-2xl md:text-[50px] font-bold text-gray-900 text-left leading-snug ">
        <Typewriter
          words={[
            "Club of Sustainability and Innovation",
            "Building Future with Ideas",
            "Innovation for a Better Tomorrow",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </div>
      {/* About (Home) just below typing effect, bigger width and less margin */}
      <div className="mt-4 w-full max-w-2xl relative">
        <Home />
      </div>
    </div>
    {/* Right side - image grid aligned to top */}
    <div className="flex-1 flex items-start justify-center px-6 pt-20">
      <ImageGrid />
    </div>
  </section> </div></div>
);

export default Front;
