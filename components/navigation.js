import Link from 'next/link'
import { useRouter } from "next/router"
import styles from '../styles/Nav.module.css'

export default function Navigation() {
    const router = useRouter();

    return (
        <nav className={styles.navList}>
            <Link href='/'>
                <div className={router.asPath === '/' ? [styles.selected, styles.navItem].join(' ') : styles.navItem} >
                    HOME
                </div>
            </Link>
            <Link href='/About'>
                <div className={router.asPath === '/About' ? [styles.selected, styles.navItem].join(' ') : styles.navItem} >
                    ABOUT
                </div>
            </Link>
            <Link href='/DevWork'>
                <div className={router.asPath === '/DevWork' ? [styles.selected, styles.navItem].join(' ') : styles.navItem} >
                    DEV WORK
                </div>
            </Link>
            <Link href='/DesignWork'>
                <div className={router.asPath === '/DesignWork' ? [styles.selected, styles.navItem].join(' ') : styles.navItem} >
                    DESIGN WORK
                </div>
            </Link>
            <Link href='/Contact'>
                <div className={router.asPath === '/Contact' ? [styles.selected, styles.navItem].join(' ') : styles.navItem} >
                    CONTACT
                </div>
            </Link>
        </nav>
    )
};
