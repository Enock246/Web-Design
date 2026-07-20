import React, { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState('entering'); // entering, visible, exiting, done

  useEffect(() => {
    // Fade in text
    setTimeout(() => setPhase('visible'), 100);
    
    // Hold, then start exit animation
    setTimeout(() => {
      setPhase('exiting');
      // Wait for exit to finish before unmounting
      setTimeout(() => onComplete(), 1000);
    }, 2000);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--canvas)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: phase === 'exiting' ? 'translateY(-100vh)' : 'translateY(0)',
        transition: 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)'
      }}
    >
      <h1
        className="heading-lg"
        style={{
          letterSpacing: '0.3em',
          color: 'var(--ink)',
          opacity: (phase === 'visible' || phase === 'exiting') ? 1 : 0,
          transition: 'opacity 1s ease-out'
        }}
      >
        GOYAGOMA
      </h1>
    </div>
  );
}
