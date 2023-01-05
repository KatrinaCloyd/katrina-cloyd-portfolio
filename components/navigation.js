import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Navigation(home) {
    return (
        <nav className={styles.navList}>
            <Link href='/'>
                <a className={home ? [styles.selected, styles.navItem].join(' ') : styles.navItem}>HOME</a>
            </Link>
            <Link href='/about'>
                <a className={styles.navItem}>ABOUT</a>
            </Link>
            <Link href='/dev'>
                <a className={styles.navItem}>DEV WORK</a>
            </Link>
            <Link href='/design'>
                <a className={styles.navItem}>DESIGN WORK</a>
            </Link>
            <Link href='/contact'>
                <a className={styles.navItem}>CONTACT</a>
            </Link>
        </nav>
    )
};
