import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <img src="/Katrina.png" alt="headshot" className={styles.headshot} />
      <h2 className="hidden">About Me</h2>
      <article className={styles.blurb}>
        <p>
          In high school I thought I would grow up to be an art teacher or a
          poet, or ideally both.
        </p>
        <p>
          In college, for a short while, I thought I would be an artist, but I
          went back to the art teacher plan. After college, with my Ohio
          teaching license in hand, I thought I would never become an art teacher…
        </p>
        <p>
          Then I became an Oregonian. I began painting, baking, jewelry making,
          street fair vending, gardening, freelancing, and pretty much trying it
          all. I needed a creative outlet and a combination avenues led me to
          design.
        </p>
        <p>
          So I became a Graphic Designer. Years of that corporate life taught me
          so much but I still wanted more. I wanted a challenge, more variance
          in the day to day... <br />And I wanted to know how to build my own site!
        </p>
        <p>
          So I became a Software Engineer.
          <br />
          And I finally feel like I have found my place. Now I get to problem
          solve with new challenges every day. I get to be creative in my
          solutions and thinking. I get to continually learn new things. And I
          get to make things beautiful.
        </p>
        <p>
          I still love to bake, hike, garden, occasionally find time to paint,
          make awesome family themed halloween costumes, and try as often as
          possible to explore what the world has to offer.
        </p>
        <p>Maybe someday I will still become a poet.</p>
        <hr></hr>
        <a
          href="/KatrinaCloyd2022.pdf"
          className={styles.resume}
          target="_blank"
        >
          RESUME
        </a>
        <br />
        <br />
        <p>
          Languages: <br />
          JavaScript | Typescript | HTML5
        </p>
        <p>
          Styling: <br />
          CSS3 | SASS | Styled Components | Material UI | Theme UI
        </p>
        <p>
          Libraries & Frameworks:
          <br />
          React | Next.js | GraphQL | Node.js | Socket.io | Express | Rest APIs
        </p>
        <p>
          Headless CMS & Databases: <br />
          Contentful | Strapi | MySQL | SQL | PostgreSQL
        </p>
        <p>
          Testing Suites: <br />
          Jest | QUnit | Travis CI
        </p>
        <p>
          Tools: <br />
          Git | GitHub | Bitbucket | Jira | VScode | Miro | Slack | Smartsheet | Trello | Illustrator | InDesign | Photoshop
        </p>
        <p>
          Currently learning: <br />
          Vue | Nuxt
        </p>
      </article>
    </section>
  );
}
