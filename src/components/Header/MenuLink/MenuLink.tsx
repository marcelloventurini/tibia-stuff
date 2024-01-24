import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.scss'

interface MenuLink {
  children: string
  route: string
}

export default function MenuLink({ children, route }: MenuLink) {
  const location = useLocation()

  return (
    <Link
      className={location.pathname === route ? styles.activeLink : ''}
      to={route}
    >
      {children}
    </Link>
  )
}
