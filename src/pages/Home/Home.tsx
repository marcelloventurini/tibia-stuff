import Sorcerer from '../../assets/images/Sorcerer_artwork.png'
import CardGuide from '../../components/CardGuide/CardGuide'
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

        <CardGuide
          img={Sorcerer}
          alt='Imagem oficial da vocação Sorcerer'
          vocation='Sorcerer'
          content='Guia Endgame'
        />
      </main>
      <BoostedSection />
    </div>
  )
}
