import Link from 'next/link'
import { useRouter } from 'next/router'

import LogoSvg from 'public/svg/octane-logo.jsx'

import styles from './styles.module.scss'

const routes = [
  { href: '/servicos', name: 'Serviços' },
  { href: '/sobre-nos', name: 'Sobre nós' },
  { href: '/contato', name: 'Contato' },
]

function NavLinks() {
  const router = useRouter()

  return (
    <ul className={styles.navLinks}>
      {routes.map(route => {
        return (
          <li key={route.name}>
            <Link href={route.href} passHref>
              <a
                className={`${styles.navLink} ${
                  router.pathname == route.href ? 'active' : ''
                }`}
              >
                {route.name}
              </a>
            </Link>
          </li>
        )
      })}
      <Link href="/orcamento" passHref>
        <button className={styles.button}>
          <a draggable="false">Orçamento</a>
        </button>
      </Link>
    </ul>
  )
}

function Navbar() {
  const router = useRouter()

  return (
    <header className={styles.navbarHeader}>
      <nav>
        <Link href="/" passHref>
          <a className={`${styles.logoLink} ${router.pathname == '/' ? 'active' : ''}`}>
            <LogoSvg />
          </a>
        </Link>

        <NavLinks />
      </nav>
    </header>
  )
}

export default Navbar
