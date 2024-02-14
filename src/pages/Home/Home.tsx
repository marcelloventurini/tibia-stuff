import BoostedSection from '../../partials/BoostedSection/BoostedSection'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1>Guia de Vocações</h1>
      </main>
      <BoostedSection />
    </div>
  )
}
