import Head from 'next/head'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'

import 'semantic-ui-css/semantic.min.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Parts
        </h1>

        <Table/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
