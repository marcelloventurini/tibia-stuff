import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__menu}>
        <ul>
          <li>
            <a href='#'>Início</a>
          </li>
          <li>
            <a href='#'>Guia Vocações</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
