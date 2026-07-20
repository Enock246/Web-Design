import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function CampaignVideo({ videoSrc = '/videos/campaign.mp4' }) {
  const revealRef = useScrollReveal();

  return (
    <section 
      ref={revealRef}
      className="reveal"
      style={{
        width: '100%',
        height: '90vh',
        backgroundColor: 'var(--canvas)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 'var(--spacing-huge)'
      }}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.8
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        <h2 className="display-xl" style={{ fontSize: '80px', mixBlendMode: 'difference', color: '#fff' }}>
          PARIS<br/>NIGHTFALL
        </h2>
        <button 
          className="button-outline" 
          style={{ 
            marginTop: 'var(--spacing-lg)', 
            pointerEvents: 'auto',
            mixBlendMode: 'difference' 
          }}
        >
          WATCH FULL FILM
        </button>
      </div>
    </section>
  );
}
