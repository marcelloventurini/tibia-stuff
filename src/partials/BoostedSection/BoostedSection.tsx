import { useEffect, useState } from 'react'
import Boosted from '../../components/Boosted/Boosted'
import styles from './BoostedSection.module.scss'

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

export default function BoostedSection() {
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
      <Boosted
        image={boostedBoss?.image_url}
        name={boostedBoss?.name}
        type={'Boss'}
      />
      
      <Boosted
        image={boostedCreature?.image_url}
        name={boostedCreature?.name}
        type={'Criatura'}
      />
    </section>
  )
}
