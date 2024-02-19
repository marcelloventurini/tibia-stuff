import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from './Dropdown.module.scss'

export default function Dropdown() {
  const [open, setOpen] = useState(false)
  const [rotateChevron, setRotateChevron] = useState(false)

  function handleClick() {
    setRotateChevron(!rotateChevron)
    setOpen(!open)
  }

  const rotate = rotateChevron ? 'rotate(180deg)' : 'rotate(0)'

  return (
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
  )
}
