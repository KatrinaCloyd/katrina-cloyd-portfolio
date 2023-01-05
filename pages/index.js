import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.grid}>
      <h2 className="hidden">Welcome</h2>
      <p>
        Hello! <br />
        Welcome to my portfolio site.
      </p>
      <p>
        I am a front end developer,
        <br />
        designer,
        <br />& artist.
      </p>
      <p>
        Here you can find examples of my work with detailed information and
        links.
      </p>
      <p>
        Explore,
        <br />
        make your self at home,
        <br />
        I’d love to hear what you think,
        <br />
        or better: work with you.
      </p>
      <p>Thanks for visiting!</p>
      <p>
        PS. <br />
        This is still a work in progress...
        <br />
        thank you for your patience, and check back soon!
      </p>
    </section>
  );
}
