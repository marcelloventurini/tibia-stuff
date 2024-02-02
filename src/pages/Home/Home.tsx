import Boosted from '../../partials/Boosted/Boosted'
import NewsPreview from '../../partials/NewsPreview/NewsPreview'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Boosted />
      <NewsPreview />
    </div>
  )
}
