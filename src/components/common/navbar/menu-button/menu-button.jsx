import * as S from './menu-button.styles'

function MenuButton({ menuOpen, setMenuOpen }) {
  return (
    <S.MenuMobileButton onClick={() => setMenuOpen(!menuOpen)}>
      <S.MenuOpenSvg className={!menuOpen && 'visible'} />
      <S.MenuCloseSvg className={menuOpen && 'visible'} />
    </S.MenuMobileButton>
  )
}

export default MenuButton
