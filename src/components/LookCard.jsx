import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function LookCard({ title, subtitle, imageUrl, imageLabel, objectPos = 'center', delayClass = '', onClick }) {
  const revealRef = useScrollReveal();

  return (
    <div 
      ref={revealRef} 
      className={`reveal ${delayClass}`} 
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', cursor: 'pointer' }}
      onClick={() => onClick && onClick({ name: title, subtitle, imageUrl, imageLabel })}
    >
      <div style={{
        width: '100%',
        aspectRatio: '3/4',
        backgroundColor: 'var(--surface-elevated)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {imageUrl ? (
          <img className="bw-hover-image" src={imageUrl} alt={imageLabel} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: objectPos }} />
        ) : (
          <span className="caption-text">[{imageLabel || 'Look Image'}]</span>
        )}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 className="body-text" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>{title}</h3>
        <span className="caption-text">{subtitle}</span>
      </div>
    </div>
  );
}
