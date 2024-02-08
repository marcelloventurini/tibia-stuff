import styles from './Header.module.scss'
import MenuLink from './MenuLink/MenuLink'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__menu}>
        <ul>
          <li>
            <MenuLink route='/'>Início</MenuLink>
          </li>
          <li>
            <MenuLink route='/mundos'>Mundos</MenuLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
