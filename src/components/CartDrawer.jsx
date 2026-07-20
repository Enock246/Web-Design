import React, { useEffect, useState } from 'react';

export default function CartDrawer({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 400); 
  };

  return (
    <>
      {/* Dark Overlay */}
      <div 
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9999,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.4s ease',
          backdropFilter: 'blur(4px)'
        }}
      />
      
      {/* Sliding Drawer */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0, bottom: 0,
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'var(--canvas)',
        zIndex: 10000,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid var(--hairline-strong)'
      }}>
        {/* Header */}
        <div style={{ 
          padding: 'var(--spacing-md)', 
          borderBottom: '1px solid var(--hairline-strong)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 className="caption-text">CART (0)</h3>
          <button 
            onClick={handleClose}
            style={{ 
              background: 'none', border: 'none', cursor: 'pointer', 
              color: 'var(--ink)', fontSize: '24px', lineHeight: 1 
            }}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div style={{ 
          padding: 'var(--spacing-xl) var(--spacing-md)', 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h2 className="heading-lg" style={{ marginBottom: 'var(--spacing-md)' }}>
            YOUR CART IS EMPTY
          </h2>
          <p className="body-text" style={{ color: 'var(--muted)', marginBottom: 'var(--spacing-xl)' }}>
            Browse the archive to construct your uniform.
          </p>

          <button onClick={handleClose} className="button-outline" style={{ width: '100%' }}>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </>
  );
}
