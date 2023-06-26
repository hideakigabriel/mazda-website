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
            <p>All models</p>
            <img src="/icon-detail.svg" alt="" height={55}/>
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
          <div>
            <a href="">Museum</a>
            <a href="">Innovations</a>
            <a href="">Our mission</a>
            <div className={styles.hero_right}>
            <p>Design vision</p>
            <img src="/icon-detail.svg" alt="" height={15}/>
          </div>
          </div>
        </div>

        {/* Right */}
        <div className={styles.rightContainer}> 
        <img src="https://www.insidemazda.co.uk/wp-content/uploads/2022/11/CX_5_Group_Statics_-8-Copy.jpg" alt="MAZDA CX-5" width={700}/>
        </div>
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
