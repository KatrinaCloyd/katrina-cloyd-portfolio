import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/workDetail.module.css'
import work from '../data/data'

export default function DevDetail() {
    const router = useRouter();
    // const [show, setShow] = useState({
    //     'github': '0',
    //     'live': '0',
    //     'npm': '0'
    // })

    // const fadeInNote = (icon) => {
    //     setTimeout(() => {
    //         setShow({ [icon]: '.8' })
    //     }, 1000);
    // }

    // const fadeOutNote = (icon) => {
    //     setTimeout(() => {
    //         setShow({ [icon]: '0' })
    //     }, 20);
    // }

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
                            <a className={styles.tool}
                                href={currentProj.github}
                                target='_blank'
                            // onMouseEnter={() => fadeInNote('github')}
                            // onMouseLeave={() => fadeOutNote('github')}
                            >
                                <img className={styles.icon} src='/git.svg' alt='github' />
                                {/* <span className={styles.tooltiptext} style={{ opacity: show.github || '0' }}
                                    >GitHub</span> */}
                            </a>}
                        {currentProj.liveSite &&
                            <a className={styles.tool}
                                href={currentProj.liveSite}
                                target='_blank'
                            // onMouseEnter={() => fadeInNote('live')}
                            // onMouseLeave={() => fadeOutNote('live')}
                            >
                                <img className={styles.icon} src='/site.svg' alt='live site' />
                                {/* <span className={styles.tooltiptext} style={{ opacity: show.live || '0' }}
                                >live site</span> */}
                            </a>}
                        {currentProj.npmLink &&
                            <a className={styles.tool}
                                href={currentProj.npmLink}
                                target='_blank'
                            // onMouseEnter={() => fadeInNote('npm')}
                            // onMouseLeave={() => fadeOutNote('npm')}
                            >
                                <img className={styles.icon} src='/npm.svg' alt='npm' />
                                {/* <span className={styles.tooltiptext} style={{ opacity: show.npm || '0' }}
                                >npm page</span> */}
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
