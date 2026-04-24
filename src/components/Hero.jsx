import { BsChevronRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[65vh] flex items-center pt-20">
      
      {/* Background Image, Gradient Overlay, and Angled Cut */}
      {/* The clip-path creates that diagonal slant at the bottom */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-darkBg"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      >
        {/* Make sure 'hero-bg.jpg' is in your public folder! */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        ></div>
        
        {/* Deep blue/purple gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-darkBg via-darkBg/90 to-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkBg/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left mt-10">
          <h2 className="text-xl font-medium text-gray-300 mb-2">Hi, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-cursive text-cyanAccent mb-4">Smith Ranjan,</h1>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Fullstack Developer</h3>
          <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0 text-lg">
            I build amazing websites and web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* DOWNLOAD CV BUTTON - Converted to <a> tag */}
            {/* href points to the file in the public folder. 'download' attribute forces download instead of opening in a new tab. */}
            <a 
              href="/resume.pdf" 
              download="Smith_Ranjan_Resume.pdf"
              className="bg-primary hover:bg-purple-700 text-white px-8 py-3 rounded-md flex items-center justify-center transition"
            >
              Download CV <BsChevronRight className="ml-2" />
            </a>
            
            <a 
              href="#contact"
              className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-3 rounded-md flex items-center justify-center transition"
            >
              Contact Me <BsChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;