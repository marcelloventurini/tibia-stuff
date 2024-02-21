import styles from './CardGuide.module.scss'

interface CardGuideProps {
  img: string
  vocation: string
  content: string
  alt: string
}

export default function CardGuide({
  img,
  vocation,
  content,
  alt,
}: CardGuideProps) {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={img} alt={alt} />
        <span className={styles.text}>
          {vocation} <br /> {content}
        </span>
      </div>
    </div>
  )
}
