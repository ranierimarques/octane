import { useState, useEffect } from 'react'
import { MenuButton, NavLinks } from './index'

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

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => toggleScrollbarVisibility(menuOpen), [menuOpen])

  return (
    <S.Header className={menuOpen && 'menuOpen'}>
      <S.Nav>
        <NavLinks menuOpen={menuOpen} closeMenu={closeMenu} />

        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </S.Nav>
    </S.Header>
  )
}

export default Navbar
