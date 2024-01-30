import { useEffect, useState } from 'react'
import styles from './Home.module.scss'

interface News {
  category: string
  content: string
  content_html: string
  date: string
  id: number
  title: string
  type: string
  url: string
}

interface Boosted {
  featured: boolean
  image_url: string
  name: string
}

export default function Home() {
  const [news, setNews] = useState<News>()
  const [boostedBoss, setBoostedBoss] = useState<Boosted>()

  async function getLastNews(): Promise<number> {
    const data = await fetch('https://api.tibiadata.com/v4/news/latest')
    const news = await data.json()
    const lastNews = news.news.pop()

    return lastNews.id
  }

  async function getLastNewsContent() {
    const id = await getLastNews()
    const data = await fetch(`https://api.tibiadata.com/v4/news/id/${id}`)
    const news = await data.json()

    setNews(news.news)
  }

  async function getBoostedBoss() {
    const data = await fetch('https://api.tibiadata.com/v4/boostablebosses')
    const boosted = await data.json()

    setBoostedBoss(boosted.boostable_bosses.boosted)
  }

  useEffect(() => {
    getBoostedBoss()
  })

  useEffect(() => {
    getLastNewsContent()
  })

  return (
    <div className={styles.container}>
      <section className={styles.news}>
        <h2>News</h2>
        <div>{news?.content}</div>
      </section>

      <section className={styles.boosted}>
        <h2>Boosted</h2>
        <div>
          {boostedBoss?.name}
          <img src={boostedBoss?.image_url} alt='' />
        </div>
      </section>
    </div>
  )
}
