// src/components/Header.jsx
import React from 'react';
import logo from '../assets/supply-trace-logo.png';

const Header = () => {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Supply Trace" style={logoStyle} />
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#000',
};

const logoStyle = {
  height: '50px',
};

export default Header;
