import React, { useState, useEffect } from 'react';

import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
    const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    const sections = menuItems.map(item => document.getElementById(item.id));
    for (let section of sections) {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);},[]); 


const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className='text-white py-5 flex justify-between items-center'>
        {/* logo */}
        <div className='text-lg font-semibold cursor-parser'>
          <span className='text-[#8245ec]'>&lt;</span>
         <span className='text-white'>Rajvardhan</span>
        <span className='text-[#8245ec]'>/</span>
        <span className='text-white'>Patil</span> 
        <span className='text-[#8245ec]'>&gt;</span>

        </div>
        {/* destop */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec]  ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}>
              <button onClick={() => handleMenuItemClick(item.id) }>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* social media icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/raj1421" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 hover:text-[#8245ec] cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/rajvardhanpatil89/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 hover:text-[#8245ec] cursor-pointer" />
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
       {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/raj1421"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajvardhanpatil89/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
 