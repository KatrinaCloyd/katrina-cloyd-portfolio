import Head from 'next/head'
import Header from '../components/Header'
import Navigation from '../components/navigation'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Katrina Cloyd Portfolio Site</title>
        <meta name="description" content="software engineer && graphic design portfolio" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <section className={styles.grid}>
            <Component {...pageProps} />
          </section>
          <Navigation />
        </main>
      </div>
    </>
  )
}

export default MyApp;
