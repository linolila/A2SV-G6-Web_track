
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/accomplishment', label: 'Accomplishment' },
    { to: '/tasks', label: 'Tasks' },
  ];

  return (
    <nav style={{
      background: '#f5f5f5',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      marginBottom: '1.5rem',
    }}>
      <ul
        className="flex"
        style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
          color: '#3182ce',
          fontWeight: 500,
          fontSize: '1.1rem',
          margin: '0 2rem',
        }}
      >
        {navLinks.map((link) => (
          <li key={link.to} style={{ position: 'relative' }}>
            <Link
              to={link.to}
              style={{
                color: location.pathname === link.to ? '#2b6cb0' : '#3182ce',
                textDecoration: 'none',
                padding: '0.3rem 1.2rem',
                borderRadius: '1rem',
                background: location.pathname === link.to ? '#e0eafc' : 'transparent',
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-block',
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#e0eafc')}
              onMouseOut={e => (e.currentTarget.style.background = location.pathname === link.to ? '#e0eafc' : 'transparent')}
            >
              {link.label}
            </Link>
          </li>
        ))}
       
      </ul>
    </nav>
  );
}

export default Navbar
