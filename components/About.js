import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <img src='/Katrina.png' alt='headshot' className={styles.headshot} />
            <div className={styles.blurb}>
                <p>Full stack software engineer with a soft spot for the front end. I love problem-solving and collaborating to find unique solutions from fresh perspectives.</p>
                <p>With seven years of experience as a graphic designer, I have a passion to make things look great and work well.</p>
                <p>When time allows, I also paint, hike, garden, make jewelry, and love to bake.</p>
                <hr></hr>
                <a href='KatrinaCloyd.pdf' target='_blank' className={styles.resume}>RESUME</a><br /><br />
                <p>Languages: <br />JavaScript | HTML | CSS </p>
                <p>Libraries/Frameworks:<br />React | Node.js | Express | jQuery | Rest APIs </p>
                <p>Databases: <br />SQL | PostgreSQL</p>
                <p>Testing Suites: <br />Jest | QUnit | Travis CI</p>
                <p>Tools: <br />GitHub | VScode | Postman | PGAdmin | Heroku | Slack | Miro | Illustrator | InDesign | Photoshop</p>
            </div>
        </div>
    )
};