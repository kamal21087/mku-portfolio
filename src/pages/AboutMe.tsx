// src/pages/AboutMe.tsx
import React from 'react';
import '../styles/AboutMe.css'; // Create this for page-specific styles

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <img src="/assets/profile.jpg" alt="Profile" className="about-me__image" />
      <div className="about-me__content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Mohammed Kamal Uddin, a passionate web developer with experience in building dynamic, responsive single-page applications. I love coding, automation, and creating seamless user experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
