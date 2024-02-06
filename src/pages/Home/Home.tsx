import BoostedSection from '../../partials/BoostedSection/BoostedSection'
import NewsPreview from '../../partials/NewsPreview/NewsPreview'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <BoostedSection />
      <NewsPreview />
    </div>
  )
}
