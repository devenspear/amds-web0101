import React, { useState } from 'react';

function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Futur3Lux') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '3rem 4rem',
        borderRadius: '12px',
        border: '1px solid #333',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        minWidth: '400px'
      }}>
        <h2 style={{
          color: '#fff',
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.5rem',
          marginBottom: '2rem',
          fontWeight: '400',
          letterSpacing: '0.05em'
        }}>
          Enter your password
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              fontSize: '1rem',
              backgroundColor: '#000',
              border: error ? '1px solid #ff4444' : '1px solid #444',
              borderRadius: '6px',
              color: '#fff',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '1.5rem',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#666'}
            onBlur={(e) => e.target.style.borderColor = error ? '#ff4444' : '#444'}
          />

          {error && (
            <p style={{
              color: '#ff4444',
              fontSize: '0.875rem',
              marginTop: '-1rem',
              marginBottom: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              Incorrect password
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordGate;
