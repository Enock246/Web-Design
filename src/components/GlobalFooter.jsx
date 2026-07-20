import React from 'react';

export default function GlobalFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--hairline-strong)',
      paddingTop: 'var(--spacing-huge)',
      paddingBottom: 'var(--spacing-lg)',
      backgroundColor: 'var(--canvas)'
    }}>
      <div className="container">
        
        {/* The 3-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-huge)'
        }}>
          {/* Column 1: Client Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <span className="caption-text" style={{ color: 'var(--ink)' }}>CLIENT SERVICES</span>
            <a href="#" className="caption-text hover-underline">Contact Atelier</a>
            <a href="#" className="caption-text hover-underline">Shipping & Returns</a>
            <a href="#" className="caption-text hover-underline">Bespoke Appointments</a>
          </div>

          {/* Column 2: Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <span className="caption-text" style={{ color: 'var(--ink)' }}>LEGAL</span>
            <a href="#" className="caption-text hover-underline">Terms of Service</a>
            <a href="#" className="caption-text hover-underline">Privacy Policy</a>
            <a href="#" className="caption-text hover-underline">Cookie Management</a>
          </div>

          {/* Column 3: Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <span className="caption-text" style={{ color: 'var(--ink)' }}>SOCIAL</span>
            <a href="#" className="caption-text hover-underline">Instagram</a>
            <a href="#" className="caption-text hover-underline">X (Twitter)</a>
            <a href="#" className="caption-text hover-underline">SoundCloud</a>
          </div>
        </div>

        {/* Massive Copyright */}
        <div style={{ 
          borderTop: '1px solid var(--hairline-strong)',
          paddingTop: 'var(--spacing-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'var(--spacing-xs)'
        }}>
          <h2 className="display-hero" style={{ fontSize: '10vw', letterSpacing: '0.05em', color: 'var(--surface-elevated)' }}>
            GOYAGOMA
          </h2>
          <p className="caption-text" style={{ color: 'var(--muted-soft)' }}>
            © {new Date().getFullYear()} GOYAGOMA STUDIOS LONDON. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}
