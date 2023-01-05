import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navList}>
      <Link href="/">
        <a className={styles.navItem}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={styles.navItem}>ABOUT</a>
      </Link>
      <Link href="/dev">
        <a className={styles.navItem}>DEV WORK</a>
      </Link>
      <Link href="/design">
        <a className={styles.navItem}>DESIGN WORK</a>
      </Link>
      <Link href="/contact">
        <a className={styles.navItem}>CONTACT</a>
      </Link>
    </nav>
  );
}
