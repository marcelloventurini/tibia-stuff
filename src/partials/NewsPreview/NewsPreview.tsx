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
  const [news, setNews] = useState<News | null>(null)

  async function getLastNews(): Promise<number | null> {
    try {
      const data = await fetch('https://api.tibiadata.com/v4/news/latest')
      const newsList = await data.json()

      const sortedNews = newsList.news.sort((a: News, b: News) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })

      const lastNews = sortedNews[0]

      return lastNews ? lastNews.id : null
    } catch (error) {
      console.error('Erro ao obter notícias:', error)
      return null
    }
  }

  async function getLastNewsContent() {
    try {
      const id = await getLastNews()

      if (id) {
        const data = await fetch(`https://api.tibiadata.com/v4/news/id/${id}`)
        const newsContent = await data.json()

        setNews(newsContent.news)
      }
    } catch (error) {
      console.error('Erro ao obter conteúdo da notícia:', error)
    }
  }

  useEffect(() => {
    getLastNewsContent()
  }, [])

  return (
    <section className={styles.news}>
      <h2>News</h2>
      <h3>{news?.title}</h3>
      <div>{news?.content}</div>
    </section>
  )
}
