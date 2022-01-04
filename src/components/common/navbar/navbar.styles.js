import { styled } from 'linaria/react'

import MenuOpen from 'public/svg/menu-mobile'
import MenuClose from 'public/svg/close-menu'

export const Header = styled.header`
  width: 100%;
  height: 85px;

  background: #121212e6;
  border-bottom: 1px solid #322f2f;

  position: sticky;
  top: 0;

  z-index: 10;

  &.menuOpen {
    background: #121212;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1168px;
  height: 100%;

  padding: 0 24px;
  margin: 0 auto;
`

export const MenuMobileButton = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: 1120px) {
    display: block;
  }
`

export const MenuOpenSvg = styled(MenuOpen)`
  display: none;

  box-sizing: content-box;
  padding: 8px 8px 7px 8px;

  &.visible {
    display: block;
  }
`

export const MenuCloseSvg = styled(MenuClose)`
  display: none;

  box-sizing: content-box;
  padding: 13px;

  &.visible {
    display: block;
  }
`
