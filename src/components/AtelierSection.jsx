import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function AtelierSection() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="container reveal" style={{
      paddingTop: 'var(--spacing-huge)',
      paddingBottom: 'var(--spacing-huge)'
    }}>
      <div className="atelier-flex" style={{
        gap: 'var(--spacing-xl)',
        alignItems: 'center',
        minHeight: '80vh'
      }}>
        <div style={{ flex: 1 }}>
          <h2 className="heading-lg" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--muted)' }}>
            GOYAGOMA
          </h2>
          <p className="body-text" style={{ 
            maxWidth: '500px', 
            marginBottom: 'var(--spacing-md)',
            fontSize: '18px',
            lineHeight: '1.8'
          }}>
            A meditation on the shadows. Goyagoma strips away the superfluous to reveal the architecture of cloth.
          </p>
          <p className="body-text" style={{ 
            maxWidth: '500px',
            color: 'var(--muted)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            We are not creating fashion; we are building armor for a hyper-visible world. Founded in obscurity, our work explores the tension between brutalist forms and delicate anonymity.
          </p>
          <a href="#" className="caption-text" style={{ borderBottom: '1px solid var(--hairline-strong)', paddingBottom: '4px' }}>
            READ THE MANIFESTO
          </a>
        </div>

        <div style={{
          flex: 1,
          height: '600px',
          backgroundColor: 'var(--surface-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <img 
            className="bw-hover-image"
            src="/images/goyagoma_hero.png" 
            alt="Goyagoma Studio"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>
      </div>
    </section>
  );
}
