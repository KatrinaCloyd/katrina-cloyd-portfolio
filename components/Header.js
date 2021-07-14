import Link from 'next/link';
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <Link href='/'>
                <img className={styles.titleImg} src='/name.png' alt='Katrina Cloyd' />
            </Link>
        </header>
    );
};