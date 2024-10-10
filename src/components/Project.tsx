// src/components/Project.tsx
import React from 'react';
import '../styles/Project.css'; // Create this file for Project-specific styles

interface ProjectProps {
  title: string;
  image: string;
  deployedUrl: string;
  repoUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} className="project__image" />
      <h3 className="project__title">{title}</h3>
      <div className="project__links">
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
