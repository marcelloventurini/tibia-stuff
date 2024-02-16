import { useState } from 'react'
import BoostedSection from '../../partials/BoostedSection/BoostedSection'
import styles from './Home.module.scss'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Guia de Vocações</h1>
        <hr />

        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <li>Druid</li>
            <li>Knight</li>
            <li>Paladin</li>
            <li>Sorcerer</li>
          </ul>

          <div className={styles.dropdown}>
            <button onClick={() => setOpen(!open)} className={styles.dropBtn}>
              selecione o conteúdo
            </button>
            {open ? (
              <ul className={styles.dropMenu}>
                <li className={styles.dropItem}>opção 1</li>
                <li className={styles.dropItem}>opção 2</li>
              </ul>
            ) : null}
          </div>
        </div>
      </main>
      <BoostedSection />
    </div>
  )
}
