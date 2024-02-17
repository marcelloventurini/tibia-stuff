import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import BoostedSection from '../../partials/BoostedSection/BoostedSection'
import styles from './Home.module.scss'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [rotateChevron, setRotateChevron] = useState(false)

  function handleClick() {
    setRotateChevron(!rotateChevron)
    setOpen(!open)
  }

  const rotate = rotateChevron ? 'rotate(180deg)' : 'rotate(0)'

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
            <button onClick={handleClick} className={styles.dropBtn}>
              selecione o conteúdo
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ transform: rotate, transition: 'all 0.2s linear' }}
              />
            </button>
            {open ? (
              <ul className={styles.dropMenu}>
                <li className={styles.dropItem}>Guia Endgame</li>
                <li className={styles.dropItem}>Guia de Up</li>
              </ul>
            ) : null}
          </div>
        </div>
      </main>
      <BoostedSection />
    </div>
  )
}
