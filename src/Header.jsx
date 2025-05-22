import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="w-full px-6 md:px-12 py-4 bg-transparent text-white font-sora">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="flex flex-col items-center justify-between">
            <span className="text-l font-sora text-github-dark">JOSHUA</span>
            <span className="-mt-2.5 text-secon ext-l font-sora">DAVID</span>
        </div>

        {/* Nav Links */}
        <nav className="space-x-6 text-sm  text-github-dark">
          <a href="#home" className="hover:text-secon">Home</a>
          <a href="#projects" className="hover:text-secon ">Projects</a>
          <a href="#about" className="hover:text-secon">About</a>
          <a href="#contact" className="hover:text-secon ">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
