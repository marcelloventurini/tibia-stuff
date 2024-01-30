import { useEffect, useState } from 'react'
import styles from './NewsPreview.module.scss'

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

export default function NewsPreview() {
  const [news, setNews] = useState<News>()

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

  useEffect(() => {
    getLastNewsContent()
  })

  return (
    <section className={styles.news}>
      <h2>News</h2>
      <div>{news?.content}</div>
    </section>
  )
}
