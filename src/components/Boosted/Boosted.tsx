import styles from './Boosted.module.scss'

interface BoostedProps {
  image: string
  name: string
  type: string
}

export default function Boosted({ image, name, type }: BoostedProps) {
  return (
    <div>
      <h3 className={styles.subtitle}>{type} do dia</h3>
      <div className={styles.container}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </div>
    </div>
  )
}
