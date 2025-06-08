import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      
      // The follower follows with a slight delay for a nice effect
      setTimeout(() => {
        follower.style.left = `${clientX}px`;
        follower.style.top = `${clientY}px`;
      }, 70);
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear the previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set a new timeout
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Add listeners for clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    clickables.forEach(element => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
      
      clickables.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`cursor ${isScrolling ? 'scrolling' : ''} ${isHovering ? 'hovering' : ''}`}
      />
      <div 
        ref={followerRef} 
        className={`cursor-follower ${isScrolling ? 'scrolling' : ''} ${isHovering ? 'hovering' : ''}`}
      />
    </>
  );
};

export default CustomCursor;