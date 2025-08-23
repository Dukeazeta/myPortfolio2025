import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './MagneticCursor.css';

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Mouse click handlers
    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Animation loop
    const animateCursor = () => {
      // Smooth cursor following
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      // Faster dot following
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;

      requestAnimationFrame(animateCursor);
    };

    // Handle magnetic elements
    const handleMagneticEnter = (e) => {
      const element = e.currentTarget;

      setIsHovering(true);
      setCursorVariant('magnetic');

      // Get cursor text from data attribute
      const text = element.getAttribute('data-cursor-text');
      if (text) setCursorText(text);

      const handleMagneticMove = (e) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate magnetic pull
        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;

        mouseX = centerX + deltaX;
        mouseY = centerY + deltaY;
      };

      element.addEventListener('mousemove', handleMagneticMove);
      element._magneticMove = handleMagneticMove;
    };

    const handleMagneticLeave = (e) => {
      const element = e.currentTarget;
      setIsHovering(false);
      setCursorVariant('default');
      setCursorText('');
      
      if (element._magneticMove) {
        element.removeEventListener('mousemove', element._magneticMove);
        delete element._magneticMove;
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add magnetic effect to elements
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    magneticElements.forEach(element => {
      element.addEventListener('mouseenter', handleMagneticEnter);
      element.addEventListener('mouseleave', handleMagneticLeave);
    });

    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      magneticElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMagneticEnter);
        element.removeEventListener('mouseleave', handleMagneticLeave);
        if (element._magneticMove) {
          element.removeEventListener('mousemove', element._magneticMove);
        }
      });
    };
  }, []);

  // Hide cursor on mobile devices
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className={`magnetic-cursor ${cursorVariant} ${isClicking ? 'clicking' : ''}`}
        animate={{
          scale: isClicking ? 0.8 : (isHovering ? 1.5 : 1),
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {cursorText && (
          <span className="cursor-text">{cursorText}</span>
        )}
      </motion.div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="magnetic-cursor-dot"
      />
    </>
  );
};

export default MagneticCursor;
