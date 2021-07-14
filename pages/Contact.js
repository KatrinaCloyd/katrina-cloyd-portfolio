import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.iconWrapper}>
            <a href="mailto: katrina.cloyd@yahoo.com" target='_blank'>
                <img
                    className={styles.icon}
                    src='/email.svg'
                    alt='email' />
            </a>
            <a href='https://github.com/KatrinaCloyd' target='_blank'>
                <img
                    className={styles.icon}
                    src='/git.svg'
                    alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/katrinacloyd/' target='_blank'>
                <img
                    className={styles.icon}
                    src='/linkedin.svg'
                    alt='linkedin' />
            </a>
            <a href='https://twitter.com/KatMariee_PDX' target='_blank'>
                <img
                    className={styles.icon}
                    src='/Twitter.svg'
                    alt='twitter' />
            </a>
            <a href='https://www.instagram.com/katmarieepdx/' target='_blank' >
                <img
                    className={styles.icon}
                    src='/ig2.svg'
                    alt='instagram' />
            </a>
        </div>
    )
}
