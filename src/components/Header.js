import React, { useEffect, useState } from 'react';
import './Header.css';
import { ArrowDown } from 'lucide-react';
function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  
  // Function to create animated particles effect
  useEffect(() => {
    const createParticles = () => {
      const particles = document.querySelector('.hero-particles');
      if (!particles) return;
      
      // Clear any existing particles
      particles.innerHTML = '';
      
      const particleCount = window.innerWidth > 768 ? 25 : 15;
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 2;
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Animation properties
        const duration = Math.random() * 50 + 30;
        const direction = Math.random() > 0.5 ? 1 : -1;
        
        // Apply floating animation
        particle.style.animation = `float ${duration}s ${direction > 0 ? 'ease-in' : 'ease-out'} infinite`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        // Add keyframes for this specific particle
        const keyframes = `
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
            }
            50% {
              transform: translateY(${20 * direction}px) translateX(${15 * direction}px) rotate(${180 * direction}deg);
            }
            100% {
              transform: translateY(0) translateX(0) rotate(${360 * direction}deg);
            }
          }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        particles.appendChild(particle);
      }
    };
    
    // Create particles on mount
    createParticles();
    
    // Recreate on window resize
    window.addEventListener('resize', createParticles);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <header className={`hero-header ${isLoaded ? 'loaded' : ''}`} id="home">
      <div className="hero-particles"></div>
      <div className="hero-overlay"></div>
      <div className="floating-lights">
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
      </div>
      <div className='hader-detail'>
        <h1 className="glow-wrapper">
          <div className="title-line">
            <span className="animated-word">Empowering</span>
          </div>
          <div className="title-line">
            <span className="word">Inclusion</span> 
            <span className="word">Through</span> 
            <span className="word">Digital</span>
          </div>
          <div className="title-line">
            <span className="animated-word">Accessibility</span>
          </div>
        </h1>
        <div className='footer-detail'>
          <p>
            At EnableDocs, we help organizations unlock the power of inclusive content. 
            Our accessibility remediation and testing services ensure your documents, 
            web content, and digital assets are fully compliant and usable by everyone - 
            including individuals with disabilities.
          </p>
          <a className="cta-secondary" href="#services">
            <span className="btn-text">Explore Services</span>
            <span className="btn-icon"><ArrowDown /></span>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;