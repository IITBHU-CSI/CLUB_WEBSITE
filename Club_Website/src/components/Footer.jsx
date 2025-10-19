import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaDribbble,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a202c] text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-tr-[3rem] rounded-tl-[3rem] p-10 md:p-16 relative overflow-hidden">
        {/* Text Section */}
        <div className="z-10 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg">
            Where ideas meet impact.
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Let’s team up to create meaningful, sustainable, and innovative
            projects together!
          </p>
          <button className="bg-white text-[#8B5CF6] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#f3e8ff] transition">
            Let’s Chat
          </button>
        </div>

       
<div className="absolute right-10 bottom-0 md:right-16 md:bottom-2 w-72 md:w-[380px]">
  <img
    src="/Images/csi7.Png"
    alt="Eco innovation illustration"
    className="w-full h-auto rounded-2xl shadow-lg border border-white/20 object-cover"
  />
</div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t border-[#8B5CF6]/30">
        {/* Logo & Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
            CSI
          </span>
          {/* <nav className="flex gap-6 text-gray-300 text-sm">
            <a href="#work" className="hover:text-[#EC4899] transition">
              Work
            </a>
            <a href="#about" className="hover:text-[#EC4899] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#EC4899] transition">
              Contact
            </a>
            <a href="#social" className="hover:text-[#EC4899] transition">
              Social
            </a>
          </nav> */}
          <nav className="flex gap-2 text-gray-300 text-sm items-center">
          <a
  href="https://mail.google.com/mail/?view=cm&to=csi@iitbhu.ac.in"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#EC4899] transition flex items-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0..." />
  </svg>
  csi@iitbhu.ac.in
</a>

</nav>

        </div>

        {/* Social Icons */}
<div className="flex gap-4 text-gray-400 text-lg">
  <a
    href="https://www.instagram.com/csi_iitbhu/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#EC4899] transition"
  >
    <FaInstagram />
  </a>
  <a
    href="https://twitter.com/csi_iitbhu"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#8B5CF6] transition"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.linkedin.com/company/csi-iitbhu"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#8B5CF6] transition"
  >
    <FaLinkedinIn />
  </a>
  <a
    href="https://www.facebook.com/iitbhu.csi/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#EC4899] transition"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.threads.net/@csi_iitbhu"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#8B5CF6] transition"
  >
    <FaDribbble />
  </a>
  <a
  href="https://mail.google.com/mail/?view=cm&to=csi@iitbhu.ac.in"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#EC4899] transition"
>
  <FaEnvelope />
</a>

</div>
</div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm pb-4">
        ©️ Copyright 2024{" "}
        <span className="font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
          CSI
        </span>{" "}
        &nbsp; | &nbsp;
        <a href="#privacy" className="hover:text-[#EC4899] transition">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
