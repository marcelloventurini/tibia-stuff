import CardGuide from '../../components/CardGuide/CardGuide'
import Dropdown from '../../components/Dropdown/Dropdown'
import Filters from '../../components/Filters/Filters'
import BoostedSection from '../../partials/BoostedSection/BoostedSection'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Guia de Vocações</h1>
        <hr />

        <div className={styles.menu}>
          <Filters />
          <Dropdown />
        </div>

        <div className={styles.cards}>
          <CardGuide />
        </div>
      </main>
      <BoostedSection />
    </div>
  )
}
