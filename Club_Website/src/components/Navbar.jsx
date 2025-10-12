import { useState } from "react";
import csiLogo from "../assets/csi_logo.png";

function Navbar() {
  const tabs=["Home", "Our Team", "Events", "Gallery", "About"];//thse are the tabs required for the page
  const links_tabs={"Home":"#","Our Team":"#","Events":"#", "Gallery":"#", "About":"#"}; //links to these above tabse are these
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full p-1 border">
              <img
                src={csiLogo}
                alt="CSI Logo"
                className="h-12 w-12"
              />
              <div className="w-8 h-8 bg-black   items-center justify-center text-white font-bold text-lg hidden">
                CSI
              </div>
            </div>
            <span className="font-mono text-headfnt font-bold tracking-tight font bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              CSI
            </span>
          </div>

         
          <div className="hidden md:flex items-center space-x-6">
            {tabs.map(
              (item) => (
                <a
                  key={item}
                  href={links_tabs["item"]}
                  className="text-sm font-medium hover:text-blue-700 transition cursor-pointer"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#"
              className="ml-4 px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 shadow-md"
            >
              Join the Community
            </a>
          </div>

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

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map(
              (item) => (
                <div
                  key={item}
                  href={links_tabs["item"]}
                  className="block px-3 py-2 rounded-md text-base
                  font-medium hover:text-blue-700 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </div>
              )
            )}
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700"
            >
              Join the Community
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
