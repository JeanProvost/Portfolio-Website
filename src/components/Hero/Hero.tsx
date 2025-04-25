import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Hero Section</h1>
      </div>
    </section>
  );
};

export default Hero;