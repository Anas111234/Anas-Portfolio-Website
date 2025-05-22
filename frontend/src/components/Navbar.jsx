import React, { useState, useEffect } from 'react';
import "../Styling/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Active link state

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll event to update active link
  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 100) {
        currentSection = section;
      }
    });

    setActiveLink(currentSection);
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">Anas Shaikh</div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={activeLink === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeLink === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "rotate1" : ""}`}></span>
          <span className={`bar ${isOpen ? "fade" : ""}`}></span>
          <span className={`bar ${isOpen ? "rotate2" : ""}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
