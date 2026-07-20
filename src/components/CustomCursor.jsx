import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    // We add a class to body so CSS can hide the default cursor only if this script runs
    document.body.classList.add('custom-cursor-enabled');

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a clickable element
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseOut);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isVisible]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: isHovering ? 'transparent' : 'var(--ink)',
        border: isHovering ? '1px solid var(--ink)' : 'none',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 3.5 : 1})`,
        transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease, border 0.15s ease',
        mixBlendMode: 'difference' // Ensures it is visible on both black and white backgrounds
      }}
    />
  );
}
