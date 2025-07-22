import React from "react";
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      minHeight: '60vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      borderRadius: '1.5rem',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      margin: '2rem 0',
      padding: '2rem 1rem',
      maxWidth: 'none',
    }}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Productivity"
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
      />
      <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0.5rem 0', color: '#2d3748' }}>
        Welcome to <span style={{ color: '#3182ce' }}><strong>DO</strong></span> Today!
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#4a5568', margin: 0 }}>Start your day with planning.</p>
      <p style={{ fontWeight: 600, color: '#38a169', marginBottom: '1.5rem' }}>BE ORGANIZED</p>
      <button
        onClick={() => navigate('/tasks')}
        style={{
          background: 'linear-gradient(90deg, #3182ce 0%, #63b3ed 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '2rem',
          padding: '0.7rem 2.2rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(49,130,206,0.10)',
          transition: 'background 0.2s',
          marginBottom: '1.2rem'
        }}
      >
        Start
      </button>
    </section>
  );
};

export default Herosection;