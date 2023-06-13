import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <section>
      {/* Header */}
      <header className={styles.header}>
        <img src="https://assets.stickpng.com/images/61321e3700feb70004beb7b7.png" alt="" className={styles.mazda_logo}/>
        <nav className={styles.nav}>
          <a href="#">Models</a>
          <a href="#">Innovations</a>
          <a href="#">Brand</a>
          <a href="#">Company</a>
          <a href="#">Find a dealer</a>
        </nav>
      </header>
      <div>
        <span>CREATE DRIVING</span>
        <div>
          <a href="#">All models</a>
        </div>
      </div>
      <img src="https://www.hdcarwallpapers.com/download/2021_mazda3_skyactiv_g_awd_turbo_hatchback_5k-3840x2160.jpg" alt="MAZDA SKYACTIV-G" />
    </section>
  )
}
