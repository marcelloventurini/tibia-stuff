import styles from './Boosted.module.scss'

// interface BoostedProps {
//   image:
// }

export default function Boosted({ image, name }) {
  return (
    <div className={styles.boostedBoss}>
      <h3 className={styles.subtitle}>Boss do Dia</h3>
      <div className={styles.container}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </div>
    </div>
  )
}
