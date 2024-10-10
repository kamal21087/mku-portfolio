// src/pages/Resume.tsx
import React from 'react';
import '../styles/Resume.css'; 

const Resume: React.FC = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" download className="resume__download">
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul className="resume__skills">
        <li>JavaScript / TypeScript</li>
        <li>React</li>
        <li>Vite</li>
        <li>CSS / SASS</li>
        <li>Git & GitHub</li>
        <li>Automation Testing with Playwright</li>
      </ul>
    </section>
  );
};

export default Resume;
