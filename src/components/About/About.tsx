import React from 'react';
import styles from './About.module.css'; // Import CSS Module

const About: React.FC = () => {
  return (
    // Use the class name from the CSS Module
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>
      {/* Content for About section */}
    </section>
  );
};

export default About; 