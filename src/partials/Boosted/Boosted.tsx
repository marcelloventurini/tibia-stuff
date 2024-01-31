import { useEffect, useState } from 'react'
import styles from './Boosted.module.scss'

interface BoostedBoss {
  featured: boolean
  image_url: string
  name: string
}

interface BoostedCreature {
  name: string
  race: string
  image_url: string
  featured: boolean
}

export default function Boosted() {
  const [boostedBoss, setBoostedBoss] = useState<BoostedBoss>()
  const [boostedCreature, setBoostedCreature] = useState<BoostedCreature>()

  async function getBoostedBoss() {
    const data = await fetch('https://api.tibiadata.com/v4/boostablebosses')
    const boosted = await data.json()

    setBoostedBoss(boosted.boostable_bosses.boosted)
  }

  async function getBoostedCreature() {
    const data = await fetch('https://api.tibiadata.com/v4/creatures')
    const boosted = await data.json()

    setBoostedCreature(boosted.creatures.boosted)
  }

  useEffect(() => {
    getBoostedBoss()
  })

  useEffect(() => {
    getBoostedCreature()
  })

  return (
    <section className={styles.boosted}>
      <h2>Boosted</h2>
      <div className={styles.boostedBoss}>
        <h3>{boostedBoss?.name}</h3>
        <img src={boostedBoss?.image_url} alt={boostedBoss?.name} />
      </div>

      <div className={styles.boostedCreature}>
        <h3>{boostedCreature?.name}</h3>
        <img src={boostedCreature?.image_url} alt={boostedCreature?.name} />
      </div>
    </section>
  )
}
