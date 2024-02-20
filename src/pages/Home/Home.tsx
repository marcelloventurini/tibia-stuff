import Sorcerer from '../../assets/images/Sorcerer_artwork.png'
import Dropdown from '../../components/Dropdown/Dropdown'
import BoostedSection from '../../partials/BoostedSection/BoostedSection'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Guia de Vocações</h1>
        <hr />

        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <li>Druid</li>
            <li>Knight</li>
            <li>Paladin</li>
            <li>Sorcerer</li>
          </ul>

          <Dropdown />
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={Sorcerer} alt='' />
            <span className={styles.text}>
              Sorcerer <br /> Guia Endgame
            </span>
          </div>
          <div className={styles.card}>Paladin - Guia de Up</div>
          <div>card 3</div>
          <div>card 4</div>
        </div>
      </main>
      <BoostedSection />
    </div>
  )
}
