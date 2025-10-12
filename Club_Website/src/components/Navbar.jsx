import { useState } from "react";
import { Link } from "react-router-dom";
import csiLogo from "../assets/csi_logo.png";

function Navbar() {
  const tabs = ["Home", "Our Team", "Events", "Gallery", "About"];
  // Map tab names to route paths
  const links_tabs = {
    "Home": "/",
    "Our Team": "/our-team",
    "Events": "/events",
    "Gallery": "/gallery",
    "About": "/about",
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full p-1 border">
              <img src={csiLogo} alt="CSI Logo" className="h-12 w-12" />
            </div>
            <span className="font-mono text-headfnt font-bold tracking-tight bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              CSI
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {tabs.map((item) => (
              <Link
                key={item}
                to={links_tabs[item]}
                className="text-sm font-medium hover:text-blue-700 transition"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/join"
              className="ml-4 px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 shadow-md"
            >
              Join the Community
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map((item) => (
              <Link
                key={item}
                to={links_tabs[item]}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/join"
              className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700"
              onClick={() => setIsOpen(false)}
            >
              Join the Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
