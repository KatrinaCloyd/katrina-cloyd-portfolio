import { useRouter } from 'next/router'
import styles from '../styles/workDetail.module.css'
import work from '../data/data'

export default function DevDetail() {
    const router = useRouter();
    const project = router.query.id;

    let currentProj = work.find(e => e.id === project);

    return (
        <>
            {currentProj &&
                <div>
                    <h2 className={styles.title}>{currentProj.title}</h2>
                    <p className={styles.tech}>{currentProj.tech}</p>
                    <div className={styles.icons}>
                        {currentProj.github &&
                            <a href={currentProj.github} target='_blank'>
                                <img className={styles.icon} src='/git.svg' alt='github' />
                            </a>}
                        {currentProj.liveSite &&
                            <a href={currentProj.liveSite} target='_blank'>
                                <img className={styles.icon} src='/site.svg' alt='live site' />
                            </a>}
                        {currentProj.npmLink &&
                            <a href={currentProj.npmLink} target='_blank'>
                                <img className={styles.icon} src='/npm.svg' alt='npm' />
                            </a>}
                    </div>
                    {currentProj.video &&
                        <video
                            className={styles.demo}
                            controls
                            autoPlay
                            muted
                        >
                            <source src={currentProj.video} type="video/mp4" />
                        </video>}
                    <p>{currentProj.blurb1}</p>
                    <div className={styles.detailImgContainer}>
                        {currentProj.image1 && <img src={currentProj.image1} alt='screenshot 1 of app' />}
                        {currentProj.image2 && <img src={currentProj.image2} alt='screenshot 2 of app' />}
                    </div>
                    <p>{currentProj.blurb2}</p>
                    <div className={styles.detailImgContainer}>
                        {currentProj.image3 && <img src={currentProj.image3} alt='screenshot 3 of app' />}
                        {currentProj.image4 && <img src={currentProj.image4} alt='screenshot 4 of app' />}
                    </div>
                    <p>{currentProj.blurb3}</p>
                    <button className={styles.backBtn} onClick={() => router.push('/DevWork')}>BACK TO DEV WORK</button>
                </div>}
            {!currentProj && <div> Hmmm.... something went wrong. <br /> Please navigate back to the DEV WORK page and try again.</div>}
        </>
    )
}
