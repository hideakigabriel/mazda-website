import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <section className={styles.layout}>
        {/* Header */}
        <header className={styles.header}>
          <img src="/mazda-logo.png" alt="Mazda logo" className={styles.mazda_Logo} />
          <nav className={styles.nav}>
            <a href="#">Models</a>
            <a href="#">Innovations</a>
            <a href="#">Brand</a>
            <a href="#">Company</a>
            <a href="#">Find a dealer</a>
          </nav>
        </header>
      </section>

      {/* Hero */}
      <section>
        <div className={styles.bgSizeCover}>
          <div className={styles.hero_left}>
            <h1 className={styles.text}>
              CELEBRATE <br /> DRIVING
            </h1>
          </div>
          <div className={styles.hero_right}>
            <p>All models</p>
            <img src="/icon-detail.svg" alt="" height={55}/>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <div></div>
        <div></div>
      </section>

      {/* Footer */}
      <section className={styles.layout}>
        <footer className={styles.footer_socialMedia}>
          <img src="/mazda-logo.png" alt="Mazda logo" className={styles.mazda_Logo} />
          <nav className={styles.nav}>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Youtube</a>
            <a href="#">Facebook</a>
          </nav>
        </footer>
      </section>

    </div>

  )
}
