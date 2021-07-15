import styles from '../styles/Contact.module.css'
import { useState } from 'react'

export default function Contact() {
    const [note, setNote] = useState('')

    return (
        <div className={styles.iconWrapper}>
            <a href="mailto: katrina.cloyd@yahoo.com" target='_blank'>
                <img
                    onMouseEnter={() => setNote('email me at katrina.cloyd@yahoo.com')}
                    onMouseLeave={() => setNote('')}
                    className={styles.icon}
                    src='/email.svg'
                    alt='email' />
            </a>
            <a href='https://github.com/KatrinaCloyd' target='_blank'>
                <img
                    onMouseEnter={() => setNote('visit my GitHub page')}
                    onMouseLeave={() => setNote('')}
                    className={styles.icon}
                    src='/git.svg'
                    alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/katrinacloyd/' target='_blank'>
                <img
                    onMouseEnter={() => setNote('visit my LinkedIn page')}
                    onMouseLeave={() => setNote('')}
                    className={styles.icon}
                    src='/linkedin.svg'
                    alt='linkedin' />
            </a>
            <a href='https://twitter.com/KatMariee_PDX' target='_blank'>
                <img
                    onMouseEnter={() => setNote('visit my Twitter <br /> (I\'m new here so not much)')}
                    onMouseLeave={() => setNote('')}
                    className={styles.icon}
                    src='/Twitter.svg'
                    alt='twitter' />
            </a>
            <a href='https://www.instagram.com/katmarieepdx/' target='_blank' >
                <img
                    onMouseEnter={() => setNote('visit my Instagram <br /> (mostly family stuff and baking)')}
                    onMouseLeave={() => setNote('')}
                    className={styles.icon}
                    src='/ig2.svg'
                    alt='instagram' />
            </a>
            <p className={styles.hoverNote}
                dangerouslySetInnerHTML={{ __html: note }}>
            </p>
        </div>
    )
}
