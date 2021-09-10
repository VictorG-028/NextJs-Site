import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
// import utilStyles from '../styles/utils.module.css'


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className={styles.header}>
        <h2 className={styles.logo}>
          <Link href="/"> 
            <a>ANIMEFLIX</a>
          </Link>
        </h2>

        <nav>
          <Link href="/"> 
            <a>Início</a>
          </Link>
          <Link href="/animes">
            <a>Animes</a>
          </Link>
          <Link href="/filmes">
            <a>Filmes</a>
          </Link>
        </nav>
        
        <div className={styles.searchForm}>
          <button id={styles.searchBtn} title="search-button">
            {/* <Image
              priority
              src="/images/10.jpg"
              className={styles.searchBtnImage}
              height={14}
              width={14}
              alt={"Search button"}
            /> */}
            {/* Image made by itim2101 */}
            <div>O</div>
            <div>/</div>
          </button>
          <input id={styles.searchTxt} type="text" placeholder="Pesquise aqui"></input>
        </div>
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

    </div>
  );
}
