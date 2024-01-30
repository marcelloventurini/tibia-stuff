import { useEffect, useState } from 'react'
import styles from './Boosted.module.scss'

interface Boosted {
  featured: boolean
  image_url: string
  name: string
}

export default function Boosted() {
  const [boostedBoss, setBoostedBoss] = useState<Boosted>()

  async function getBoostedBoss() {
    const data = await fetch('https://api.tibiadata.com/v4/boostablebosses')
    const boosted = await data.json()

    setBoostedBoss(boosted.boostable_bosses.boosted)
  }

  useEffect(() => {
    getBoostedBoss()
  })

  return (
    <section className={styles.boosted}>
      <h2>Boosted</h2>
      <div>
        {boostedBoss?.name}
        <img src={boostedBoss?.image_url} alt={boostedBoss?.name} />
      </div>
    </section>
  )
}
