/* eslint-disable react/no-unescaped-entities */
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
            <h1 className={styles.text_Title}>
              CELEBRATE <br /> DRIVING
            </h1>
          </div>
          <div className={styles.hero_right}>
            <a>All models</a>
            <img src="/icon-detail.svg" alt="" height={55} />
          </div>
        </div>
      </section>

      {/* Secound section */}

      <section className={styles.container}>
        {/* Left */}
        <div className={styles.leftContainer}>
          <h1 className={styles.text_Subtitle}>
            FOR US A CAR IS NOT SIMPLY A MASS OF METAL.
          </h1>
          <p>
            Creating an emotional connection between the car and the driver, which feel like a deep bond between a rider and his/her house.
            Mazda's "KODO DESIGN" is an expression that makes an ongoing pursuit of the from that reflects sch connection.
          </p>

          <p>
            Mazda is committed to further to developing the "KODO DESIGN" and create an expression of "redefined elegance" rooted in Japanese aesthetics.
          </p>
          <div className={styles.wrapLinkList}>
            <a href="">Museum</a>
            <a href="">Innovations</a>
            <a href="">Our mission</a>
            <div className={styles.hero_right}>
              <a href="">Design vision</a>
              <img src="/icon-detail.svg" alt="" height={30} />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className={styles.rightContainer}>
          <img src="https://www.insidemazda.co.uk/wp-content/uploads/2022/11/CX_5_Group_Statics_-8-Copy.jpg" alt="MAZDA CX-5" width={700} />
        </div>
      </section>

      {/* Third section */}

      <section className={styles.container}>
        {/* Left */}
        <div className={styles.leftContainer}>
          <h1 className={styles.text_Subtitle}>
            THE AMAZING<br />MODELS
          </h1>
          <p>
            When creating new Mazda, we never make drastic changes, but always make noticeable and important changes. Each model update qualities.
            Therefore, updating any Mazda models is not a revolution. This is evolution. Progress from the best to excellent.
          </p>
          <div className={styles.hero_right}>
            <a href="">All models</a>
            <img src="/icon-detail.svg" alt="" height={55} />
          </div>
        </div>
      </section>

      {/* Social media footer */}
      {/* <section className={styles.layout}>
        <footer className={styles.footer_socialMedia}>
          <img src="/mazda-logo.png" alt="Mazda logo" className={styles.mazda_Logo} />
          <nav className={styles.nav}>
            <a href="#">Linkedin</a>
            <a href="#">Github</a>
            <a href="#">Youtube</a>
            <a href="#">Facebook</a>
          </nav>
        </footer>
      </section> */}

      {/* Newsletter */}



      {/* Footer */}

      {/* <section className={styles.layout}>
        <footer className={styles.footer_socialMedia}>
          <a href="#">©Mazda Motors inc.</a>
          <nav className={styles.nav}>
            <a href="#">Terms and conditions</a>
            <a href="#">Privacy policy</a>
            <a href="#">Designed by Hideaki Design</a>
          </nav>
        </footer>
      </section>*/}

      {/* Footer */}

      <footer>
        <div className={styles.content}>
          <div className={styles.top}>
            <img src="/mazda-logo.png" alt="Mazda logo" className={styles.mazda_Logo} />
            <nav className={styles.nav}>
              <a href="#">Linkedin</a>
              <a href="#">Github</a>
              <a href="#">Youtube</a>
              <a href="#">Facebook</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>

  )
}
