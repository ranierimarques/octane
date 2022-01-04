import { useRouter } from 'next/router'
import Link from 'next/link'

import { RoutesLinks, SocialLinks } from '../index'

import LogoSvg from 'public/svg/octane-logo'

import * as S from './nav-links.styles'

function NavLinks({ menuOpen, closeMenu }) {
  const { pathname } = useRouter()

  return (
    <>
      <Link href="/" passHref>
        <S.LogoLink className={pathname == '/' && 'active'} onClick={closeMenu}>
          <LogoSvg />
        </S.LogoLink>
      </Link>

      <S.NavLinks className={menuOpen && 'open'}>
        <RoutesLinks closeMenu={closeMenu} />

        <Link href="/orcamento" passHref>
          <S.Button onClick={closeMenu}>
            <a draggable="false">Orçamento</a>
          </S.Button>
        </Link>

        <SocialLinks />
      </S.NavLinks>
    </>
  )
}

export default NavLinks
