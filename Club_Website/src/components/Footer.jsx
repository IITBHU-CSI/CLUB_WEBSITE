import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-yellow-400 rounded-tr-[3rem] rounded-tl-[3rem] p-10 md:p-16 relative overflow-hidden">
        {/* Text Section */}
        <div className="z-10 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            Where ideas meet impact.
          </h2>
          <p className="text-black/70 mb-6 text-lg">
            Let’s team up to create meaningful, eco-friendly, and innovative
            projects together!
          </p>
          <button className="bg-black text-yellow-400 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition">
            Let’s Chat
          </button>
        </div>

        {/* Illustration (hand punching through) */}
        <div className="absolute right-5 bottom-0 md:right-10 md:bottom-0 w-64 md:w-80">
          <img
            src="/image/7.jpg"
            alt="Friendly hand illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t border-gray-800">
        {/* Logo & Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-wide">CSI</span>
          <nav className="flex gap-6 text-gray-400 text-sm">
            <a href="#work" className="hover:text-yellow-400">
              Work
            </a>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
            <a href="#social" className="hover:text-yellow-400">
              Social
            </a>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-300 text-lg">
          <a href="#" className="hover:text-yellow-400">
            <FaDribbble />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm pb-4">
        © Copyright 2024 <span className="font-semibold text-white">CSI</span>{" "}
        &nbsp; | &nbsp;{" "}
        <a href="#privacy" className="hover:text-yellow-400">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
