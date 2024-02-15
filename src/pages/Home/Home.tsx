import BoostedSection from '../../partials/BoostedSection/BoostedSection'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Guia de Vocações</h1>
        <hr />

        <ul className={styles.menuItems}>
          <li>Druid</li>
          <li>Knight</li>
          <li>Paladin</li>
          <li>Sorcerer</li>
        </ul>
      </main>
      <BoostedSection />
    </div>
  )
}
