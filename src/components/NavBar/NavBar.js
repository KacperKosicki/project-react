import React from 'react';
import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
        <Container>
          <div className={styles.navContent}>
            <a href="/" className={styles.logo}>
              <span className="fa fa-tasks" style={{ fontSize: '24px' }} />
            </a>
            <ul className={styles.navLinks}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorite">Favorite</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    );
  };
  
  export default NavBar;