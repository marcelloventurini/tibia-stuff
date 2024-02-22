import styles from './Filters.module.scss'
import filters from './filters.json'

export default function Filters() {
  return (
    <div className={styles.filter}>
      {filters.map(option => (
        <button className={styles.btn} key={option.id}>
          {option.label}
        </button>
      ))}
    </div>
  )
}
