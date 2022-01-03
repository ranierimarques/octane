import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import LogoSvg from 'public/svg/octane-logo'

import * as S from './styles'

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
  const { pathname } = useRouter()

  return (
    <S.NavLinks className={isOpen && 'open'}>
      {routes.map(route => {
        return (
          <li key={route.name} onClick={closeMenu}>
            <Link href={route.href} passHref>
              <S.Link className={pathname == route.href && 'active'}>{route.name}</S.Link>
            </Link>
          </li>
        )
      })}
      <Link href="/orcamento" passHref>
        <S.Button onClick={closeMenu}>
          <a draggable="false">Orçamento</a>
        </S.Button>
      </Link>
      <S.SocialLinks>
        {social.map(social => {
          return (
            <li key={social.name}>
              <a href={social.href} target="_blank" rel="noreferrer noopener">
                {social.name}
              </a>
            </li>
          )
        })}
      </S.SocialLinks>
    </S.NavLinks>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useRouter()

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    }
    document.body.style.overflow = ''
  }, [menuOpen])

  return (
    <S.Header className={menuOpen && 'menuOpen'}>
      <S.Nav>
        <Link href="/" passHref>
          <S.LogoLink className={pathname == '/' && 'active'} onClick={closeMenu}>
            <LogoSvg />
          </S.LogoLink>
        </Link>

        <NavLinks isOpen={menuOpen} closeMenu={closeMenu} />
        <S.MenuMobileButton onClick={() => setMenuOpen(!menuOpen)}>
          <S.MenuOpenSvg className={!menuOpen && 'visible'} />
          <S.MenuCloseSvg className={menuOpen && 'visible'} />
        </S.MenuMobileButton>
      </S.Nav>
    </S.Header>
  )
}

export default Navbar
