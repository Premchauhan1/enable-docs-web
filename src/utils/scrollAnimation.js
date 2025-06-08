/**
 * Utility for handling scroll-based animations in the application
 */

// Function to check if an element is in viewport
export const isInViewport = (element, offset = 150) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight - offset &&
    rect.bottom >= 0
  );
};

// Function to add scroll listeners to sections
export const initScrollAnimation = () => {
  const sections = document.querySelectorAll('section');
  
  const handleScroll = () => {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      }
    });
  };
  
  // Initial check on load
  handleScroll();
  
  // Add event listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Function to add smooth scrolling for anchor links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    });
  });
};