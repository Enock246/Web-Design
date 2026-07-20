import React, { useState, useEffect } from 'react';

export default function GlobalNav({ onOpenSearch, onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Desktop Left / Mobile Hamburger */}
        <div style={{ width: '33%' }}>
          <button 
            className="caption-text hide-on-mobile" 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
            onClick={() => setIsOpen(true)}
          >
            Menu
          </button>
          
          <button 
            className="mobile-hamburger" 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'inherit',
              display: 'var(--mobile-display, none)' 
            }}
            onClick={() => setIsOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
              <line x1="3" y1="8" x2="21" y2="8"></line>
              <line x1="3" y1="16" x2="21" y2="16"></line>
            </svg>
          </button>
        </div>
        
        {/* Center Logo */}
        <div style={{ width: '33%', textAlign: 'center' }}>
          <a href="#" className="heading-lg" style={{ letterSpacing: '0.3em' }}>
            GOYAGOMA
          </a>
        </div>
        
        {/* Right Nav */}
        <div style={{ width: '33%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
          <button onClick={onOpenSearch} className="caption-text hide-on-mobile" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>Search</button>
          <button onClick={onOpenCart} className="caption-text" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>Cart (0)</button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'var(--canvas)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--spacing-md) 5%'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="caption-text">MENU</span>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                <line x1="6" y1="6" x2="18" y2="18"></line>
                <line x1="6" y1="18" x2="18" y2="6"></line>
              </svg>
            </button>
          </div>
          
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: 'var(--spacing-lg)' 
          }}>
            <a href="#" className="display-xl" onClick={() => setIsOpen(false)}>READY TO WEAR</a>
            <a href="#" className="display-xl" onClick={() => setIsOpen(false)}>LEATHER GOODS</a>
            <a href="#" className="display-xl" onClick={() => setIsOpen(false)}>THE ATELIER</a>
            <button className="display-xl" style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, cursor: 'pointer' }} onClick={() => { setIsOpen(false); onOpenSearch(); }}>SEARCH</button>
          </div>
        </div>
      )}
    </>
  );
}
