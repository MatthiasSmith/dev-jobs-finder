import React from 'react';
import Link from 'next/link';

import styles from './header.module.css';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>devjobsfinder</a>
      </Link>
      <div className={styles.childrenContainer}>{children}</div>
    </header>
  );
};

export default Header;
