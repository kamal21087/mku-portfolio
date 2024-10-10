// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mohammed Kamal Uddin. All rights reserved.</p>
      <div className="footer__links">
        <a href="https://github.com/kamal21087" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://stackoverflow.com/users/your-stackoverflow" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
        {/* Add a third platform if desired */}
      </div>
    </footer>
  );
};

export default Footer;
