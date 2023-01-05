import styles from '../styles/Nav.module.css'

export default function Navigation({ page, setPage }) {

    return (
        <nav className={styles.navList}>
            <a className={page === 'home' ? [styles.selected, styles.navItem].join(' ') : styles.navItem}
                onClick={() => { setPage('home') }}>
                HOME</a>
            {/* <a className={page === 'about' ? [styles.selected, styles.navItem].join(' ') : styles.navItem}
                onClick={() => { setPage('about') }}>
                ABOUT
            </a> */}
            <a className={page === 'dev' ? [styles.selected, styles.navItem].join(' ') : styles.navItem}
                onClick={() => { setPage('dev') }}>
                DEV WORK
            </a>
            <a className={page === 'design' ? [styles.selected, styles.navItem].join(' ') : styles.navItem}
                onClick={() => { setPage('design') }}>
                DESIGN WORK
            </a>
            <a className={page === 'contact' ? [styles.selected, styles.navItem].join(' ') : styles.navItem}
                onClick={() => { setPage('contact') }}>
                CONTACT
            </a>
        </nav>
    )
};
