import { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/10">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <span className="text-2xl font-bold text-white">SmithRanjan.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-primary transition px-3 py-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-primary transition px-3 py-2">About</a>
              <a href="#skills" className="text-gray-300 hover:text-primary transition px-3 py-2">Skills</a>
              <a href="#portfolio" className="text-gray-300 hover:text-primary transition px-3 py-2">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-primary transition px-3 py-2">Contact</a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cardBg border border-gray-700 hover:bg-primary hover:border-primary text-white px-6 py-2 rounded-md transition"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden relative z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <BsX size={28} /> : <BsList size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* ✅ Animated Mobile Menu */}
      <div
        className={`md:hidden bg-cardBg border-b border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2">Skills</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2">Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cardBg border border-gray-700 hover:bg-primary hover:border-primary text-white px-6 py-2 mt-4 block rounded-md transition"
          >
            Resume
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;