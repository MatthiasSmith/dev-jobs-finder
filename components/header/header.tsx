import React from 'react';
import styles from './header.module.css';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={styles.header}>
      <h2 style={{ fontWeight: 300, letterSpacing: '0.2px', fontFamily: 'sans-serif' }}>jobfinder</h2>
      {children}
    </header>
  );
};

export default Header;
