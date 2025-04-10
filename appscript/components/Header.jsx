import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftIcons}>
        <img src="/images/Logo.png" alt="Icon" className={styles.icon} />
      </div>
      <div className={styles.center}>
        <h1 className={styles.logo}>LOGO</h1>
        <nav className={styles.nav}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>
      <div className={styles.rightIcons}>
        <span>🔍</span>
        <span>🤍</span>
        <span>🛒</span>
        <span>👤</span>
        <span>ENG ▾</span>
      </div>
    </header>
  );
}
