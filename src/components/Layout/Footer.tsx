import React from 'react';
import styles from './Footer.module.css'; // We'll create this CSS module next

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Placeholder Name. All rights reserved.</p>
        <ul className={styles.footerLinks}>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          {/* Add other relevant links */}
        </ul>
        <div className={styles.socialLinks}>
          {/* Add social media icons/links later */}
          <a href="#linkedin">LinkedIn</a>
          <a href="#github">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 