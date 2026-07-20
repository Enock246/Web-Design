import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section style={{
      borderTop: '1px solid var(--hairline-strong)',
      borderBottom: '1px solid var(--hairline-strong)',
      padding: 'var(--spacing-huge) 5%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'var(--surface-soft)'
    }}>
      <h2 className="display-xl" style={{ fontSize: '32px', marginBottom: 'var(--spacing-md)' }}>
        SUBSCRIBE TO THE ATELIER
      </h2>
      <p className="body-text" style={{ color: 'var(--muted)', maxWidth: '400px', marginBottom: 'var(--spacing-xl)' }}>
        {status === 'success' 
          ? 'Welcome to the inner circle. Your access has been granted.'
          : 'Receive early access to collections, private sales, and editorial dispatches from Paris.'}
      </p>
      
      {status === 'success' ? (
        <div style={{ color: 'var(--ink)', padding: 'var(--spacing-sm) 0', borderBottom: '1px solid var(--ink)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>
          SUBSCRIBED SUCCESSFULLY
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '500px',
            borderBottom: '1px solid var(--body)'
          }}
        >
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--ink)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--body-lg-size)',
              padding: 'var(--spacing-sm) 0',
              outline: 'none',
              textTransform: 'uppercase'
            }}
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: status === 'loading' ? 'var(--muted)' : 'var(--ink)',
              fontFamily: 'var(--font-display)',
              fontSize: '13px',
              letterSpacing: '0.1em',
              cursor: status === 'loading' ? 'wait' : 'pointer',
              transition: 'color 0.3s'
            }}
          >
            {status === 'loading' ? 'WAIT...' : 'SUBMIT'}
          </button>
        </form>
      )}
    </section>
  );
}
