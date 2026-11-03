
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center gap-8
      transition-all duration-300 ease-in-out
      ${menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`text - 2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        ×
      </button>

      {/* Logo */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text - 2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        pedro<span className="text-blue-500">.tech</span>
      </a>

      {/* Navigation links */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-gray-300 hover:text-white transition-colors text-xl transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-gray-300 hover:text-white transition-colors text-xl transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-gray-300 hover:text-white transition-colors text-xl transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        Contact
      </a>
    </div >
  );
};
