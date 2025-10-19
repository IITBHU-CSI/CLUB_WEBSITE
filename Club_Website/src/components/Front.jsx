import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ImageGrid from "./ImageGrid";
import Home from "./Home";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Front = () => (
  <div className="flex justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100"> 
    <div
      className="absolute inset-0 pointer-events-none opacity-10"
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%)
        `
      }}
    />
    <section className="flex flex-col justify-center md:flex-row w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-10">

      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col justify-center items-start text-left"> 

        {/* Main Heading */}
        <h1
          className="
            font-serif font-extrabold tracking-tight text-[#880163]
            text-[100px]
            px-2 pt-0
          "
        >
          CSI
        </h1>

        {/* Subheading with Typewriter */}
        <div className="font-semibold text-gray-900 leading-snug text-[clamp(1.5rem,4vw,3rem)] max-w-[600px]">
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

        {/* About/Home Section */}
        <div className="font-normal">
          <Home />
        </div>

        {/* Social Icons */}
        <div className="flex mt-8 space-x-4 sm:space-x-6">
          <a
            href="https://chat.whatsapp.com/LopBqZj7CSz1YP7CsLi88e"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl hover:scale-110 transition-transform duration-200"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/csi_iitbhu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c64699] rounded-full flex items-center justify-center text-white text-lg sm:text-xl hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/csi-iitbhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-full flex items-center justify-center text-white text-lg sm:text-xl hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE GRID */}
      <div className="flex-1 flex items-center justify-center w-full md:w-1/2 mt-10 md:mt-0">
        <div className="flex justify-center items-center w-full h-full">
          <ImageGrid />
        </div>
      </div>
    </section>
  </div>
);

export default Front;