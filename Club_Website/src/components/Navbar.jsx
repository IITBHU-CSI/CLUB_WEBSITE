import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import csiLogo from "../assets/csi_logo.png";

function Navbar() {
  const tabs = ["Home", "Our Team", "Events", "Gallery"];

  const links_tabs = {
    Home: "/",
    "Our Team": "/our-team",
    Events: "/events",
    Gallery: "/gallery",
    
  };

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-50 text-gray-900 shadow-md font-sans border-b-2 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-orange-50">
              <img
                src={csiLogo}
                alt="CSI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className="font-bold tracking-tight text-[#880163] text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Club of Sustainability & Innovation
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {tabs.map((item) => (
              <Link
                key={item}
                to={links_tabs[item]}
                className={`px-3 py-2 rounded-md font-medium text-sm sm:text-base ${
                  location.pathname === links_tabs[item]
                    ? "bg-[#880163] text-white shadow-md"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#880163]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-orange-50">
            {tabs.map((item) => (
              <Link
                key={item}
                to={links_tabs[item]}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium text-sm sm:text-base ${
                  location.pathname === links_tabs[item]
                    ? "bg-[#880163] text-white shadow-md"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
