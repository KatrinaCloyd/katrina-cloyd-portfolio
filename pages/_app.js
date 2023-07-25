import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/navigation";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Katrina Cloyd Portfolio Site</title>
        <meta
          name="description"
          content="software engineer && graphic design portfolio"
        />
        <meta property="og:image" content="/socialshare.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className={styles.container}>
        <Header />
        <section className={styles.page}>
          <Navigation />
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
        </section>
      </div>
    </>
  );
}

export default MyApp;
