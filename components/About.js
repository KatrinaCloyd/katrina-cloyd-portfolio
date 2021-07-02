import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <img src='/Katrina.png' alt='headshot' className={styles.headshot} />
            <div className={styles.blurb}>
                <p>In high school I thought I would grow up to be an art teacher or a poet, ideally both.</p>
                <p>In college, for a short while, I though I would be an artist. Then I went back to art teacher. <br />After college, with my Ohio teaching license in hand, I thought I would never be an art teacher…</p>
                <p>Then I became an Oregonian. I began painting, baking, jewelry making, street fair vending… and freelancing. I needed a creative outlet and an array of avenues lead me to design.</p>
                <p>So I became a Graphic Designer.<br />Years of that corporate life taught me much and also became a grind, grinding on me. I wanted more of a challenege more variance in the day to day... I wanted to know how to make my own site!</p>
                <p>So I became Software Engineer.<br />Now I get to probelem solve with new challenges every day. I get to be creative in my solutions. I get to make things beautiful. And I get to learn new things everyday. </p>
                <p>I am also a mother of two, still love to bake, occasionally find time to paint, make awesome family themed halloween costumes, and try as often as possible to explore what the world has to offer.</p>
                {/* <p>Maybe someday I will still become a poet.</p> */}
                <hr></hr>
                <a href='/KatrinaCloyd2021.pdf' className={styles.resume} target='_blank'>RESUME</a>
                <br /><br />
                <p>Languages: <br />JavaScript | HTML | CSS </p>
                <p>Libraries/Frameworks:<br />React | Node.js | Express | jQuery | Rest APIs </p>
                <p>Databases: <br />SQL | PostgreSQL</p>
                <p>Testing Suites: <br />Jest | QUnit | Travis CI</p>
                <p>Tools: <br />GitHub | VScode | Postman | PGAdmin | Heroku | Slack | Miro | Illustrator | InDesign | Photoshop</p>
            </div>
        </div>
    )
};

{/* <p>Full stack software engineer with a soft spot for the front end. I love problem-solving and collaborating to find unique solutions from fresh perspectives.</p>
<p>With seven years of experience as a graphic designer, I have a passion to make things look great and work well.</p>
<p>When time allows, I also paint, hike, garden, make jewelry, and love to bake.</p> */}