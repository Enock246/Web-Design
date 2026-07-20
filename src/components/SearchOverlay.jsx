import React, { useEffect, useState } from 'react';

export default function SearchOverlay({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger fade in
    setTimeout(() => setIsOpen(true), 10);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 400); // Wait for fade out
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'var(--canvas)',
      zIndex: 10000,
      opacity: isOpen ? 1 : 0,
      transition: 'opacity 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      padding: '5%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleClose}
          style={{ 
            background: 'none', border: 'none', cursor: 'pointer', 
            color: 'var(--ink)', fontSize: '24px' 
          }}
        >
          &times;
        </button>
      </div>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input 
          type="text" 
          placeholder="TYPE TO SEARCH"
          autoFocus
          style={{
            width: '100%',
            maxWidth: '800px',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '2px solid var(--ink)',
            color: 'var(--ink)',
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--display-xl-size)',
            textTransform: 'uppercase',
            outline: 'none',
            textAlign: 'center',
            paddingBottom: 'var(--spacing-md)'
          }}
        />
      </div>
    </div>
  );
}
