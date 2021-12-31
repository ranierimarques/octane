import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import LogoSvg from 'public/svg/octane-logo'
import MenuMobileSvg from 'public/svg/menu-mobile'
import CloseMenuSvg from 'public/svg/close-menu'

import styles from './styles.module.scss'

const routes = [
  { href: '/servicos', name: 'Serviços' },
  { href: '/sobre-nos', name: 'Sobre nós' },
  { href: '/contato', name: 'Contato' },
]

const social = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/octane-studio/' },
  { name: 'Instagram', href: 'https://www.instagram.com/octane.std/' },
  { name: 'Behance', href: 'https://www.behance.net/octanestudio' },
]

function NavLinks({ isOpen, closeMenu }) {
  const router = useRouter()

  return (
    <ul className={`${styles.navLinks} ${isOpen ? 'open' : ''}`}>
      {routes.map(route => {
        return (
          <li key={route.name} onClick={closeMenu}>
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
        <button className={styles.button} onClick={closeMenu}>
          <a draggable="false">Orçamento</a>
        </button>
      </Link>
      <ul className={styles.socialLinks}>
        {social.map(social => {
          return (
            <li key={social.name}>
              <a href={social.href} target="_blank" rel="noreferrer noopener">
                {social.name}
              </a>
            </li>
          )
        })}
      </ul>
    </ul>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <header className={`${styles.navbarHeader} ${menuOpen ? 'menuOpen' : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a
            className={`${styles.logoLink} ${router.pathname == '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <LogoSvg />
          </a>
        </Link>

        <NavLinks isOpen={menuOpen} closeMenu={closeMenu} />
        <button
          className={styles.menuMobileButton}
          onClick={() => setMenuOpen(oldState => !oldState)}
        >
          <MenuMobileSvg
            className={`${styles.menuMobileSvg} ${!menuOpen ? 'visible' : ''}`}
          />
          <CloseMenuSvg
            className={`${styles.closeMenuSvg} ${menuOpen ? 'visible' : ''}`}
          />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
