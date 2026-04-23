import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#0f0c29] pt-10 pb-12 relative overflow-hidden text-white">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* The Purple Diagonal Shape Accent */}
        <div className="absolute -left-20 bottom-0 w-80 h-32 bg-purple-600/30 -skew-x-12 rounded-tr-[60px] -z-0 blur-2xl"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 relative z-10">
          
          {/* Social Icons */}
          <div className="flex gap-6 mb-6 md:mb-0">
             <a href="https://github.com/drupalbytes" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
               <BsGithub size={20}/>
             </a>
             <a href="https://in.linkedin.com/in/ranjan07" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
               <BsLinkedin size={20}/>
             </a>
             <a href="https://www.instagram.com/smithranjan07_official" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
               <BsInstagram size={20}/>
             </a>
             <a href="https://www.youtube.com/@smithranjan07" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
               <BsYoutube size={20}/>
             </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} <span className="text-gray-300">Smith Ranjan</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;