import styles from './CardGuide.module.scss'
import cards from './cards.json'

export default function CardGuide() {
  return (
    <>
      {cards.map(card => (
        <div className={styles.card}>
          <img src={card.image} alt={card.alt} />
          <span className={styles.text}>
            {card.vocation} <br /> {card.content}
          </span>
        </div>
      ))}
    </>
  )
}
