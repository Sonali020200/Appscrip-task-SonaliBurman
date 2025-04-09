import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <nav className={styles.nav}>
        <Link href="/">Shop</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Stories</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact Us</Link>
      </nav>
      <div className={styles.actions}>
        <span>🔍</span>
        <span>👤</span>
        <span>🤍</span>
        <span>🛒</span>
        <span>ENG ▾</span>
      </div>
    </header>
  );
}
