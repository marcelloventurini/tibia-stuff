import Boosted from '../../partials/Boosted/Boosted'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <NewsPreview /> */}
      <Boosted />
    </div>
  )
}
