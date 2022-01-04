import { useState, useEffect } from 'react'
import { NavLinks } from './index'

import * as S from './navbar.styles'

function toggleScrollbarVisibility(menuOpen) {
  if (menuOpen) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = ''
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => toggleScrollbarVisibility(menuOpen), [menuOpen])

  return (
    <S.Header className={menuOpen && 'menuOpen'}>
      <S.Nav>
        <NavLinks menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />

        <S.MenuMobileButton onClick={() => setMenuOpen(!menuOpen)}>
          <S.MenuOpenSvg className={!menuOpen && 'visible'} />
          <S.MenuCloseSvg className={menuOpen && 'visible'} />
        </S.MenuMobileButton>
      </S.Nav>
    </S.Header>
  )
}

export default Navbar
