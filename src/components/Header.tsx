// src/components/Header.tsx
import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css'; // We'll create this file for Header-specific styles

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>MKU Dev Portfolio</h1>
        <p>Building Experiences with Code & Automation Enthusiast</p>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
