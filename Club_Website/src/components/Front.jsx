import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ImageGrid from "./ImageGrid";
import Home from "./Home";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Front = (
  
) => (
  <div className="flex justify-center">
    <div className="w-full">
      <section className="flex flex-col md:flex-row bg-[#fffdf4] min-h-screen">
        {/* Left side: CSI, Typing, About */}
        <div className="flex-1 flex flex-col justify-start items-start px-3 md:pl-20 pt-24 md:pt-[70px] relative">
          {/* CSI Gradient Title */}
          <h1 className="text-6xl md:text-[120px] font-serif font-extrabold tracking-tight
            bg-gradient-to-r from-purple-700 via-pink-500 to-pink-700 bg-clip-text text-transparent mt-0 pt-0">
            CSI
          </h1>

          {/* Typewriter Subheading */}
          <div className="text-[15px] md:text-[38px] font-bold text-gray-900 text-left leading-snug">
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
            <div className="mt-8 font-semibold">
            <Home />     
            </div>
           
          </div>

          {/* About/Home section */}
          

          {/* Social Icons fixed below About */}
          <div className="flex mt-6 space-x-6 ">
            <a href="https://chat.whatsapp.com/LopBqZj7CSz1YP7CsLi88e" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/csi_iitbhu/?hl=en" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/csi-iitbhu/" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right side - image grid */}
        <div className="flex-1 flex items-start justify-center px-6 pt-20">
          <ImageGrid />
        </div>

        

      </section>
   
    </div>
  </div>
);

export default Front;








