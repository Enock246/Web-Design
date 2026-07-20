import React, { useEffect, useState } from 'react';

export default function ProductDrawer({ product, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  // Trigger open animation after mount
  useEffect(() => {
    if (product) {
      // Small delay to allow CSS transition to catch the change
      setTimeout(() => setIsOpen(true), 10);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  const handleClose = () => {
    setIsOpen(false);
    // Wait for animation to finish before fully unmounting
    setTimeout(onClose, 400); 
  };

  if (!product) return null;

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
        maxWidth: '500px',
        backgroundColor: 'var(--canvas)',
        zIndex: 10000,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid var(--hairline-strong)',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{ 
          padding: 'var(--spacing-md)', 
          borderBottom: '1px solid var(--hairline-strong)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 className="caption-text">PRODUCT DETAILS</h3>
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
        <div style={{ padding: 'var(--spacing-xl) var(--spacing-md)', flex: 1, paddingBottom: '120px' }}>
          <div style={{ 
            width: '100%', 
            aspectRatio: '3/4', 
            backgroundColor: 'var(--surface-card)',
            marginBottom: 'var(--spacing-lg)'
          }}>
             <img src={product.imageUrl} alt={product.name || product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <h2 className="display-xl" style={{ fontSize: '36px', marginBottom: 'var(--spacing-xs)', lineHeight: 1.1 }}>
            {product.name || product.title}
          </h2>
          
          {product.isArchive ? (
            <p className="caption-text" style={{ color: 'var(--muted)', fontSize: '10px', marginBottom: 'var(--spacing-xl)' }}>
              ARCHIVED {product.subtitle ? `| ${product.subtitle}` : ''}
            </p>
          ) : (
            <p className="caption-text" style={{ color: 'var(--muted)', fontSize: '10px', marginBottom: 'var(--spacing-xl)' }}>
              {product.price || 'PRICE ON REQUEST'} {product.subtitle ? `| ${product.subtitle}` : ''}
            </p>
          )}

          <p className="body-text" style={{ marginBottom: 'var(--spacing-xl)' }}>
            {product.imageLabel || 'Constructed with precision in our London atelier. This piece balances sharp architectural lines with fluid movement.'}
          </p>
        </div>

        {/* Bottom Fade & Button Container */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 'var(--spacing-xl) var(--spacing-md) var(--spacing-md)',
          background: 'linear-gradient(to top, var(--canvas) 60%, transparent)',
          pointerEvents: 'none'
        }}>
          <div style={{ pointerEvents: 'auto' }}>
            {product.isArchive ? (
              <button className="button-outline" style={{ width: '100%', borderColor: 'var(--hairline-strong)', color: 'var(--muted)', cursor: 'not-allowed' }}>
                UNAVAILABLE FOR PURCHASE
              </button>
            ) : (
              <button className="button-outline" style={{ width: '100%', backgroundColor: 'var(--ink)', color: 'var(--canvas)', borderColor: 'var(--ink)' }}>
                BUY WITH SHOPIFY
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
