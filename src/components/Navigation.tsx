// src/components/Navigation.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : undefined}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : undefined}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
