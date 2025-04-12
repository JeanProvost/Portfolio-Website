import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {/* Use onClick for smooth scrolling */}
        <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 