import styles from '../styles/workList.module.css'

export default function DevWork({ setPage }) {

    return (
        // <p>examples of my design work coming soon</p>
        <div>
            <div className={styles.container}>
                <h1 className={styles.projectTitle}>GIM LLC.</h1>
                <figure className={styles.projectImage}>
                    <img src='/GIM.png' alt='screenshot of GIM homepage' width='300' />
                </figure >
                <div className={styles.projectInfo}>
                    <p>GIM LLC is an escape room inspired website where players work together to find clues to free the ghost!</p>
                    <p>React | Socket.io<br />Context Api | Node | Express</p>
                    <div className={styles.icons}>
                        <a href='https://github.com/GIM-LLC' target='_blank'>
                            <img
                                className={styles.icon}
                                src='/git.svg'
                                alt='github' />
                        </a>
                        <a href='https://www.escapegim.com/' target='_blank'>
                            <img
                                className={styles.icon}
                                src='/site.svg'
                                alt='live site' />
                        </a>
                    </div>
                    <button onClick={() => setPage('GIM')}>MORE INFO
                    </button>
                </div>
            </div>
        </div>
    )
};