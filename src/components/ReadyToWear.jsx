import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function RtwItem({ name, price, imageUrl, delayClass = '', onClick }) {
  const revealRef = useScrollReveal();

  return (
    <div 
      ref={revealRef} 
      className={`reveal ${delayClass}`} 
      style={{ width: '300px', flex: '0 0 auto', cursor: 'pointer', scrollSnapAlign: 'start' }}
      onClick={() => onClick({ name, price, imageUrl })}
    >
      <div style={{
        width: '100%',
        aspectRatio: '3/4',
        backgroundColor: 'var(--surface-elevated)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-md)',
        overflow: 'hidden'
      }}>
        {imageUrl ? (
          <img className="bw-hover-image" src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span className="caption-text">[PRODUCT IMAGE]</span>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 className="caption-text">{name}</h4>
        <span className="caption-text" style={{ color: 'var(--muted)' }}>{price}</span>
      </div>
    </div>
  );
}

export default function ReadyToWear({ onSelectProduct }) {
  return (
    <section style={{
      paddingTop: 'var(--spacing-huge)',
      paddingBottom: 'var(--spacing-huge)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 'var(--spacing-lg)',
        minHeight: 'auto'
      }}>
        <h2 className="display-xl" style={{ fontSize: '48px' }}>READY TO WEAR</h2>
        <a href="#" className="caption-text" style={{ borderBottom: '1px solid var(--hairline-strong)', paddingBottom: '4px' }}>SHOP ALL</a>
      </div>

      <div style={{
        display: 'flex',
        gap: 'var(--spacing-md)',
        overflowX: 'auto',
        padding: '0 5%',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE 10+
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch'
      }}>
        <RtwItem name="NOCTURNAL SUITING" price="$1,200" imageUrl="/images/goyagoma_06.png" delayClass="reveal-delay-1" onClick={onSelectProduct} />
        <RtwItem name="HEAVY KNITWEAR" price="$850" imageUrl="/images/goyagoma_07.png" delayClass="reveal-delay-2" onClick={onSelectProduct} />
        <RtwItem name="UTILITARIAN FORM" price="$450" imageUrl="/images/goyagoma_08.png" delayClass="reveal-delay-3" onClick={onSelectProduct} />
        <RtwItem name="AUSTERE SILHOUETTE" price="$3,400" imageUrl="/images/goyagoma_09.png" delayClass="reveal-delay-4" onClick={onSelectProduct} />
        <RtwItem name="DRAPED TULLE" price="$950" imageUrl="/images/goyagoma_10.png" delayClass="reveal-delay-5" onClick={onSelectProduct} />
      </div>
    </section>
  );
}
