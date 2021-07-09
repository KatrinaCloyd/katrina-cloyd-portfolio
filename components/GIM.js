import styles from '../styles/workDetail.module.css';
import work from '../data/data';
import React from 'react';

export default function GIM({ setPage, project }) {

    let currentProj = work.find(e => e.id === project);

    return (
        // <div>Hello</div>
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
            <video
                className={styles.demo}
                controls
                autoplay
                muted
            >
                <source src={currentProj.video} type="video/mp4" />
            </video>
            <p>{currentProj.blurb1}</p>
            <div className={styles.detailImgContainer}>
                <img src={currentProj.image1} alt='screenshot 1 of app' />
                <img src={currentProj.image2} alt='screenshot 2 of app' />
            </div>
            <p>{currentProj.blurb2}</p>
            <div className={styles.detailImgContainer}>
                <img src={currentProj.image3} alt='screenshot 3 of app' />
                <img src={currentProj.image4} alt='screenshot 4 of app' />
            </div>
            <p>{currentProj.blurb3}</p>
            <button className={styles.backBtn} onClick={() => setPage('dev')}>BACK TO DEV WORK</button>
        </div>
    )
}