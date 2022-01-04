import { styled } from 'linaria/react'

import MenuOpen from 'public/svg/menu-mobile'
import MenuClose from 'public/svg/close-menu'

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
