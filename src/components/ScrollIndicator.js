import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercentage);
      
      // Only show the indicator when the user has scrolled a bit
      setIsVisible(scrollTop > 100);

      // Determine active section (for the dots)
      const newActiveSection = Math.min(
        4,
        Math.floor(scrollPercentage / 20)
      );
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section names for tooltips
  const sectionNames = ['Home', 'Services', 'About', 'Features', 'Contact'];

  return (
    <div className={`scroll-indicator-container ${isVisible ? 'visible' : ''}`}>
      <div className="scroll-marker-top">
        <span className="scroll-tooltip">Top</span>
      </div>
      <div className="scroll-track">
        <div 
          className="scroll-progress" 
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="scroll-sections">
        {[0, 1, 2, 3, 4].map((section, index) => (
          <div 
            key={index} 
            className={`scroll-section-marker ${scrollProgress > (index + 1) * 20 - 10 ? 'active' : ''} ${activeSection === index ? 'current' : ''}`}
          >
            <span className="scroll-tooltip">{sectionNames[index]}</span>
          </div>
        ))}
      </div>
      <div className="scroll-marker-bottom">
        <span className="scroll-tooltip">Bottom</span>
      </div>
    </div>
  );
};

export default ScrollIndicator;