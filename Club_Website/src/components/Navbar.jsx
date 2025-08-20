import csiLogo from '../assets/csi_logo.png';

function Navbar() {
  return (
    <nav className="bg-white text-gray-900 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-1 border">
              <img 
                src={csiLogo} 
                alt="CSI Logo" 
                className="h-8 w-8"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm hidden">
                CSI
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-800">
              CSI INITIATIVES
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-blue-700 transition">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-700 transition">
              Programs
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-700 transition">
              Mentors
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-700 transition">
              Organizations
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-700 transition">
              About
            </a>
            {/* Gradient CTA button */}
            <a
              href="#"
              className="ml-4 px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 shadow-md"
            >
              Join the Community
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">
            Home
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">
            Programs
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">
            Mentors
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">
            Organizations
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">
            About
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700">
            Join the Community
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
