import React from 'react';
import styles from './sideMenu.module.css'
import Link from 'next/link';
const SideMenu = () => {
    return (
        <div className={styles.sidenav}>
        <Link href="/about-us">About</Link>
        <Link href="/about-us/vision">Vision</Link>
        <Link href="/about-us/mission">Mission</Link>
       
      </div>
    );
}

export default SideMenu;
