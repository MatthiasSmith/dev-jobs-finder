import React from 'react';
import styles from './footer.module.css';

const Footer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.childrenContainer}>{children}</div>
    </footer>
  );
};

export default Footer;
