import React from 'react';
import LookCard from './LookCard';
import useScrollReveal from '../hooks/useScrollReveal';

export default function CollectionGrid({ onSelectProduct }) {
  const revealRef = useScrollReveal();

  return (
    <section className="container" style={{
      paddingTop: 'var(--spacing-huge)',
      paddingBottom: 'var(--spacing-huge)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 'var(--spacing-xl)',
        borderBottom: '1px solid var(--hairline)',
        paddingBottom: 'var(--spacing-md)'
      }}>
        <h2 className="display-xl">THE ARCHIVE</h2>
        <a href="#" className="caption-text">VIEW ALL</a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 'var(--spacing-lg)',
      }}>
        <LookCard 
          title="Look 01"
          subtitle="FW26"
          imageUrl="/images/goyagoma_01.png"
          imageLabel="Structural Coat"
          objectPos="center"
          delayClass="reveal-delay-1"
          onClick={(product) => onSelectProduct({ ...product, isArchive: true })}
        />
        <LookCard 
          title="Look 02"
          subtitle="FW26"
          imageUrl="/images/goyagoma_02.png"
          imageLabel="Silk Drape"
          objectPos="center"
          delayClass="reveal-delay-2"
          onClick={(product) => onSelectProduct({ ...product, isArchive: true })}
        />
        <LookCard 
          title="Look 03"
          subtitle="FW26"
          imageUrl="/images/goyagoma_03.png"
          imageLabel="Monochrome Tailoring"
          objectPos="center"
          delayClass="reveal-delay-3"
          onClick={(product) => onSelectProduct({ ...product, isArchive: true })}
        />
        <LookCard 
          title="Look 04"
          subtitle="FW26"
          imageUrl="/images/goyagoma_04.png"
          imageLabel="Leather Architect"
          objectPos="center"
          delayClass="reveal-delay-4"
          onClick={(product) => onSelectProduct({ ...product, isArchive: true })}
        />
        <LookCard 
          title="Look 05"
          subtitle="FW26"
          imageUrl="/images/goyagoma_05.png"
          imageLabel="Nocturnal Suiting"
          objectPos="center"
          delayClass="reveal-delay-5"
          onClick={(product) => onSelectProduct({ ...product, isArchive: true })}
        />
      </div>
    </section>
  );
}
