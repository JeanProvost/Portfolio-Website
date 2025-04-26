import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageShape}></div>
      </div>

      <div className={styles.heroCard}>
        <h2>[Your Name]</h2>
        <p>[Subtext, e.g., Software Developer]</p>
      </div>


      <div className={styles.heroContent}>
        <h1>Hero Section</h1>
      </div>
    </section>
  );
};

export default Hero;