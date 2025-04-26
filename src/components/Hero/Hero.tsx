import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const nameText = "[Your Name Here Please Replace Me]";
  const subText = "[Some interesting subtext goes right here about yourself]";
  const highlightColor = '#5EF38C';

  const colorizeEveryThirdWord = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const isThirdWord = (index + 1) % 3 === 0;
      // Add space after each word except the last one
      const trailingSpace = index < words.length - 1 ? ' ' : ''; 
      return (
        <span key={index} style={{ color: isThirdWord ? highlightColor : 'inherit' }}>
          {word}{trailingSpace}
        </span>
      );
    });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageShape}></div>
      </div>

      <div className={styles.heroContent}>
        <h2>{colorizeEveryThirdWord(nameText)}</h2>
        <p>{colorizeEveryThirdWord(subText)}</p>
      </div>
    </section>
  );
};

export default Hero;