import styles from './Boosted.module.scss'

export default function Boosted({ image, name, type }) {
  return (
    <div className={styles.boostedBoss}>
      <h3 className={styles.subtitle}>{type} do dia</h3>
      <div className={styles.container}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </div>
    </div>
  )
}
