import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const nameText = "[Your Name Here Please Replace Me]";
  const subText = "[Some interesting subtext goes right here about yourself]";
  const highlightColor = '#5EF38C';

  // State and logic for Name animation
  const nameWords = nameText.split(' ');
  const [highlightedNameIndex, setHighlightedNameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightedNameIndex((prevIndex) => (prevIndex + 1) % nameWords.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [nameWords.length]);

  const subWords = subText.split(' ');
  const [highlightedSubIndex, setHighlightedSubIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightedSubIndex((prevIndex) => (prevIndex + 1) % subWords.length);
    }, 10);

    return () => clearInterval(intervalId);
  }, [subWords.length]);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h2>
          {nameWords.map((word, index) => {
            const isHighlighted = index === highlightedNameIndex;
            const trailingSpace = index < nameWords.length - 1 ? ' ' : '';
            return (
              <span key={index} style={{ color: isHighlighted ? highlightColor : 'inherit' }}>
                {word}{trailingSpace}
              </span>
            );
          })}
        </h2>
        <p>
          {subWords.map((word, index) => {
            const isHighlighted = index === highlightedSubIndex;
            const trailingSpace = index < subWords.length - 1 ? ' ' : '';
            return (
              <span key={index} style={{ color: isHighlighted ? highlightColor : 'inherit' }}>
                {word}{trailingSpace}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default Hero;