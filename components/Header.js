import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute z-10 top-[0] md:top-[21px] left-[0] md:left-[20px] right-[0] md:right-[20px] bg-white h-[101px] flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <button className="border border-black bg-transparent px-4 py-2 flex items-center space-x-2 md:hidden">
          <span>Contact Us</span>
          <span>→</span>
        </button>
        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4 text-[14px] font-[400] text-black">
            <li><a href="#about">About</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Our Teams</a></li>
            <li><a href="#enquiry">Make Enquiry</a></li>
          </ul>
        </nav>
      </div>
      <div className="hidden md:flex">
        <button className="border border-black bg-transparent px-4 py-2 flex items-center space-x-2">
          <span>Contact Us</span>
          <span>→</span>
        </button>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="block w-full h-[2px] bg-black transform rotate-45 translate-y-[5px]"></span>
            <span className="block w-full h-[2px] bg-black transform -rotate-45 -translate-y-[5px]"></span>
          </div>
        ) : (
          <div className="w-6 h-6 flex flex-col justify-between items-center">
            <span className="block w-full h-[2px] bg-black"></span>
            <span className="block w-full h-[2px] bg-black"></span>
            <span className="block w-full h-[2px] bg-black"></span>
          </div>
        )}
      </button>
      {menuOpen && (
        <div className="md:hidden absolute top-[101px] left-0 right-0 bg-white z-10 p-4">
          <ul className="flex flex-col space-y-2 text-[14px] font-[400] text-black">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#news" onClick={toggleMenu}>News</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#team" onClick={toggleMenu}>Our Teams</a></li>
            <li><a href="#enquiry" onClick={toggleMenu}>Make Enquiry</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
