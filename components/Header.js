import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img className={styles.titleImg} src='/name.png' alt='Katrina Cloyd' />
        </header>
    );
};