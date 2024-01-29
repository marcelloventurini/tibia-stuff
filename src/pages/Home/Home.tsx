import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.container__news}>news</section>

      <section className={styles.container__boosted}>boosted</section>
    </div>
  )
}
