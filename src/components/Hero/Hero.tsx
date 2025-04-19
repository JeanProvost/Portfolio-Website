import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <h1>Hero Section</h1>
      <div className={styles.heroImageContainer}></div>
      <div className={styles.heroContent}>

      </div>
    </section>
  );
};

export default Hero;