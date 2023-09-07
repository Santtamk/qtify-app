import React from 'react';
import Logo from '../Logo/Logo';
import styles from './NavBar.module.css';
import Button from '../Button/Button';
import Search from '../Search/Search';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search />
        <Button children='Give Feedback'/>
    </nav>
  )
}
