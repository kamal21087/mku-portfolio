// src/pages/Portfolio.tsx
import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css'; 

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Project One',
      image: '/assets/project1.png',
      deployedUrl: 'https://project-one.com',
      repoUrl: 'https://github.com/kamal21087/project-one',
    },
    {
      title: 'Project Two',
      image: '/assets/project2.png',
      deployedUrl: 'https://project-two.com',
      repoUrl: 'https://github.com/kamal21087/project-two',
    },
    // Add four more projects similarly
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio__projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
