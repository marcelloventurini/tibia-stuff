import Druid from '../../assets/images/Druid_artwork.png'
import Knight from '../../assets/images/Knight_artwork.png'
import Paladin from '../../assets/images/Paladin_artwork.png'
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

        <div className={styles.cards}>
          <CardGuide
            img={Sorcerer}
            alt='Imagem oficial da vocação Sorcerer'
            vocation='Sorcerer'
            content='Guia Endgame'
          />

          <CardGuide
            img={Knight}
            alt='Imagem oficial da vocação Knight'
            vocation='Knight'
            content='Guia de Up'
          />

          <CardGuide
            img={Druid}
            alt='Imagem oficial da vocação Druid'
            vocation='Druid'
            content='Guia de Up'
          />

          <CardGuide
            img={Paladin}
            alt='Imagem oficial da vocação Paladin'
            vocation='Paladin'
            content='Guia Endgame'
          />

          <CardGuide
            img={Sorcerer}
            alt='Imagem oficial da vocação Sorcerer'
            vocation='Sorcerer'
            content='Guia de Up'
          />

          <CardGuide
            img={Knight}
            alt='Imagem oficial da vocação Knight'
            vocation='Knight'
            content='Guia Endgame'
          />

          <CardGuide
            img={Druid}
            alt='Imagem oficial da vocação Druid'
            vocation='Druid'
            content='Guia Endgame'
          />

          <CardGuide
            img={Paladin}
            alt='Imagem oficial da vocação Paladin'
            vocation='Paladin'
            content='Guia de Up'
          />
        </div>
      </main>
      <BoostedSection />
    </div>
  )
}
