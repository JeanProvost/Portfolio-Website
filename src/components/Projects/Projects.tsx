import React from 'react';
import styles from './Projects.module.css'; // Import CSS Module

const Projects: React.FC = () => {
  return (
    // Use the class name from the CSS Module
    <section id="projects" className={styles.projectsSection}>
      <h2>Projects</h2>
      {/* Content for Projects section */}
    </section>
  );
};

export default Projects; 