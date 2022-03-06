import { styled } from 'linaria/react'

import { CloseMenu as CloseMenuSvg } from 'public/svgs'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);

  opacity: 0;
  visibility: hidden;

  transition: all 0.2s ease-in 0.2s;

  &.open {
    opacity: 1;
    visibility: visible;

    transition: all 0.3s ease;
  }
`

export const Title = styled.h3`
  max-width: 365px;

  font-weight: 500;
  font-variation-settings: 'wght' 475;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;

  margin-bottom: 32px;
`

export const Warning = styled.p`
  max-width: 402px;

  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 12px;
  line-height: 17px;
  color: #cacad3;

  margin-bottom: 24px;
`

export const Link = styled.a`
  color: #fa5a47;
  font-weight: 500;
  font-variation-settings: 'wght' 500;

  :hover {
    text-decoration: underline;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`

export const CloseMenu = styled(CloseMenuSvg)`
  position: absolute;
  top: 10px;
  right: 10px;

  box-sizing: content-box;
  border-radius: 5px;
  padding: 13px;

  cursor: pointer;

  fill: #87879b;

  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    fill: #ffffff;
    background: #29292e;
  }
`
