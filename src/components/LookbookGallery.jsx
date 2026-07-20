import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function LookbookImage({ src, alt, delayClass = '', style = {} }) {
  const revealRef = useScrollReveal();
  
  return (
    <div ref={revealRef} className={`reveal ${delayClass}`} style={style}>
      <img className="bw-hover-image" src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: style.objectPosition || 'center' }} />
    </div>
  );
}

export default function LookbookGallery() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="container reveal" style={{
      paddingTop: 'var(--spacing-huge)',
      paddingBottom: 'var(--spacing-huge)',
      marginBottom: 'var(--spacing-huge)',
      borderTop: '1px solid var(--hairline-strong)',
      borderBottom: '1px solid var(--hairline-strong)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h2 className="display-xl" style={{ fontSize: '40px', letterSpacing: '0.2em' }}>
          THE LOOKBOOK
        </h2>
        <p className="caption-text" style={{ marginTop: 'var(--spacing-md)' }}>
          WINTER ESSENTIALS
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-md)',
        alignItems: 'start'
      }}>
        {/* Large Feature Image */}
        <LookbookImage 
          src="/images/goyagoma_01.png" 
          alt="Lookbook feature" 
          delayClass="reveal-delay-1" 
          style={{ width: '100%', aspectRatio: '3/4', gridRow: 'span 2' }} 
        />
        
        {/* Smaller Supporting Images */}
        <LookbookImage 
          src="/images/goyagoma_02.png" 
          alt="Lookbook detail" 
          delayClass="reveal-delay-2" 
          style={{ width: '100%', aspectRatio: '1/1' }} 
        />
        <LookbookImage 
          src="/images/goyagoma_08.png" 
          alt="Lookbook angle" 
          delayClass="reveal-delay-3" 
          style={{ width: '100%', aspectRatio: '3/4' }} 
        />
        <LookbookImage 
          src="/images/goyagoma_06.png" 
          alt="Lookbook wide" 
          delayClass="reveal-delay-4" 
          style={{ width: '100%', aspectRatio: '16/9', objectPosition: 'center top' }} 
        />
      </div>
    </section>
  );
}
