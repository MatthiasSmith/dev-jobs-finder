import React from 'react';
import styles from './header.module.css';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>devjobfinder</span>
      <div className={styles.childrenContainer}>{children}</div>
    </header>
  );
};

export default Header;
