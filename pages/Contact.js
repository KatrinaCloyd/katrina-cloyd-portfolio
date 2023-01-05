import styles from "../styles/Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [note, setNote] = useState("");
  const [hoverOrNot, setHover] = useState(styles.hoverNoteHide);

  const fadeInNote = (note) => {
    setTimeout(() => {
      setNote(note);
      setHover(styles.hoverNoteShow);
    }, 500);
  };

  const fadeOutNote = () => {
    setTimeout(() => {
      setNote("");
      setHover(styles.hoverNoteHide);
    }, 20);
  };

  return (
    <section className={styles.iconWrapper}>
      <h2 className="hidden">Contact Me</h2>
      <a href="mailto: katrina.cloyd@yahoo.com" target="_blank">
        <img
          onMouseEnter={() =>
            fadeInNote("Click to email me at katrina.cloyd@yahoo.com")
          }
          onMouseLeave={() => fadeOutNote("")}
          className={styles.icon}
          src="/email.svg"
          alt="email"
        />
      </a>
      <a href="https://github.com/KatrinaCloyd" target="_blank">
        <img
          onMouseEnter={() => fadeInNote("Click to visit my GitHub page")}
          onMouseLeave={() => fadeOutNote("")}
          className={styles.icon}
          src="/git.svg"
          alt="github"
        />
      </a>
      <a href="https://www.linkedin.com/in/katrinacloyd/" target="_blank">
        <img
          onMouseEnter={() => fadeInNote("Click to visit my LinkedIn page")}
          onMouseLeave={() => fadeOutNote("")}
          className={styles.icon}
          src="/linkedin.svg"
          alt="linkedin"
        />
      </a>
      <a href="https://twitter.com/KatMariee_PDX" target="_blank">
        <img
          onMouseEnter={() =>
            fadeInNote(
              "Click to visit my Twitter <br /> (I'm new here so not much)"
            )
          }
          onMouseLeave={() => fadeOutNote("")}
          className={styles.icon}
          src="/Twitter.svg"
          alt="twitter"
        />
      </a>
      <a href="https://www.instagram.com/katmarieepdx/" target="_blank">
        <img
          onMouseEnter={() =>
            fadeInNote(
              "Click to visit my Instagram <br /> (mostly family stuff and baking)"
            )
          }
          onMouseLeave={() => fadeOutNote("")}
          className={styles.icon}
          src="/ig2.svg"
          alt="instagram"
        />
      </a>
      <p className={hoverOrNot} dangerouslySetInnerHTML={{ __html: note }}></p>
    </section>
  );
}
