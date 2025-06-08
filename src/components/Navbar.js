// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate which section is in view
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-brand">
          <div className="logo-container">
            <h1>Enable<span>Docs</span></h1>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#contact" className="contact-btn">Contact Us</a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact Us</a></li>
        </ul>
      </div>
      
      {/* Backdrop for sidebar */}
      {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
    </nav>
  );
};

export default Navbar;
