import React from 'react';

export default function HeroSection() {
  return (
    <section style={{
      width: '100%',
      height: '100vh',
      position: 'relative',
      backgroundColor: 'var(--canvas)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Animated Film Grain Overlay */}
      <div className="film-grain-overlay"></div>

      {/* Background Photography with Ken Burns effect */}
      <img 
        className="bw-hover-image hero-video-effect"
        src="/images/goyagoma_hero.png" 
        alt="Goyagoma Editorial"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          zIndex: 1
        }}
      />
      {/* Dark gradient overlay for nav readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
        zIndex: 2
      }}></div>
      
      {/* Dark overlay for contrast if needed */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 2
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-lg)'
      }}>
        <h1 className="display-hero" style={{ lineHeight: 0.85, margin: 0 }}>
          SOMETHING<br />TO<br />WEAR
        </h1>
        <button className="button-outline">
          DISCOVER
        </button>
      </div>
    </section>
  );
}
