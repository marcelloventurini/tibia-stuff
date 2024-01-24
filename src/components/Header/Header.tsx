import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__menu}>
        <ul>
          <li>
            <Link to={'/'}>Início</Link>
          </li>
          <li>
            <Link to={'/guia-vocacoes'}>Guia Vocações</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
