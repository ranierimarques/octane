import Link from 'next/link'
import { useRouter } from 'next/router'
import { OctaneLogo } from 'public/svgs'
import { Button } from 'src/common'
import { RoutesLinks, SocialLinks } from '..'
import * as S from './nav-links.styles'

function NavLinks({ menuOpen, closeMenu }) {
  const { pathname } = useRouter()

  return (
    <>
      <Link href="/" passHref>
        <S.LogoLink className={pathname == '/' && 'active'} onClick={closeMenu}>
          <OctaneLogo />
        </S.LogoLink>
      </Link>

      <S.NavLinks className={menuOpen && 'open'}>
        <RoutesLinks closeMenu={closeMenu} />

        <Button variant="small">Orçamento</Button>
        <SocialLinks />
      </S.NavLinks>
    </>
  )
}

export default NavLinks
