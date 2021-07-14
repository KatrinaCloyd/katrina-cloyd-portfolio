import styles from '../styles/workList.module.css'
import work from '../data/data'
import { useRouter } from 'next/router'

export default function DevWork() {
    const router = useRouter();

    return (
        <div className={styles.list}>
            {work.map(e =>
                <div className={styles.container} key={e.title}>
                    <h1 className={styles.projectTitle}>{e.title}</h1>
                    <figure className={styles.projectImage}>
                        <img src={e.image1} alt='screenshot of app' width='300' />
                    </figure >
                    <div className={styles.projectInfo}>
                        <p>{e.oneLiner}<em>{e.note}</em></p>
                        <p>{e.tech}</p>
                        <div className={styles.icons}>
                            {e.github &&
                                <a href={e.github} target='_blank'>
                                    <img className={styles.icon} src='/git.svg' alt='github' />
                                </a>}
                            {e.liveSite &&
                                <a href={e.liveSite} target='_blank'>
                                    <img className={styles.icon} src='/site.svg' alt='live site' />
                                </a>}
                            {e.npmLink &&
                                <a href={e.npmLink} target='_blank'>
                                    <img className={styles.icon} src='/npm.svg' alt='npm' />
                                </a>}
                        </div>
                        <button onClick={() => router.push(`/DevDetail?id=${e.id}`)}>MORE INFO
                        </button>
                    </div>
                </div>)}
        </div>
    )
};