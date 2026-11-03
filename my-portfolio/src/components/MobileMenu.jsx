
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center gap-8
      transition-all duration-300 ease-in-out
      ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
      >
        ×
      </button>

      {/* Logo */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="font-mono text-xl font-bold text-white"
      >
        pedro<span className="text-blue-500">.tech</span>
      </a>

      {/* Navigation links */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 hover:text-white transition-colors text-xl"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 hover:text-white transition-colors text-xl"
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 hover:text-white transition-colors text-xl"
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 hover:text-white transition-colors text-xl"
      >
        Contact
      </a>
    </div>
  );
};
