import { styled } from 'linaria/react'

import { MenuMobile, CloseMenu } from 'public/svgs'

export const MenuMobileButton = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: 1120px) {
    display: block;
  }
`

export const MenuOpenSvg = styled(MenuMobile)`
  display: none;

  box-sizing: content-box;
  padding: 8px 8px 7px 8px;

  &.visible {
    display: block;
  }
`

export const MenuCloseSvg = styled(CloseMenu)`
  display: none;

  box-sizing: content-box;
  padding: 13px;

  &.visible {
    display: block;
  }
`
