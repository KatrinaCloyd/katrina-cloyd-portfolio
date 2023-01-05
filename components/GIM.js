import styles from '../styles/workDetail.module.css'

export default function GIM({ setPage }) {

    return (
        <div>
            <h2 className={styles.title}>GIM LCC.</h2>
            <p className={styles.tech}>React | Socket.io | Context Api | Node | Express</p>
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
            <video
                className={styles.demo}
                controls
                autoplay
                muted
            >
                <source src='/GIM.mp4' type="video/mp4" />
            </video>
            <p>LARGE BLURB 1 lorem ipsum placeholder text for description from resume same stuff  different place description description blah blah blah lorem ipsum placeholder text for description from resume same stuff  different place description description blah blah blah lorem ipsum placeholder text for description from resume same stuff  different place description description blah blah blah</p>
            <div className={styles.detailImgContainer}>
                <img src='/GIM.png' alt='screenshot 1 of app' />
                <img src='/GIM2.png' alt='screenshot 2 of app' />
            </div>
            <p>DETAIL BLURB 2 lorem ipsum placeholder text for description from resume same stuff  different place description description blah blah blah lorem ipsum placeholder text for description from resume</p>
            <div className={styles.detailImgContainer}>
                <img src='/GIM3.png' alt='screenshot 3 of app' />
                <img src='/GIM4.png' alt='screenshot 4 of app' />
            </div>
            <p>DETAIL BLURB 3 lorem ipsum placeholder text for description from resume same stuff  different place description description blah blah blah lorem ipsum placeholder text for description from resume</p>
            <button className={styles.backBtn} onClick={() => setPage('dev')}>BACK TO DEV WORK</button>
        </div>
    )
}