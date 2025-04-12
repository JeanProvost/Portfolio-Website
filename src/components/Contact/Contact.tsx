import React from 'react';
import styles from './Contact.module.css'; // Import CSS Module

const Contact: React.FC = () => {
  return (
    // Use the class name from the CSS Module
    <section id="contact" className={styles.contactSection}>
      <h2>Contact</h2>
      {/* Content for Contact section */}
    </section>
  );
};

export default Contact; 