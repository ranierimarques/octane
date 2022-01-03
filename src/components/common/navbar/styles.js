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

export const LogoLink = styled.a`
  position: relative;
  display: inline-block;

  height: 85px;
  padding: 20px 0;

  border-bottom: 2px solid transparent;

  transition: background 0.2s ease;

  :before {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;

    bottom: -2px;

    background: transparent;
  }

  :hover:before {
    background: #f9351f80;
  }

  &.active:before {
    background: #f93822;
  }

  svg {
    height: 100%;
  }
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

// NavLinks

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  height: 85px;

  &.open {
    display: flex;
  }

  @media (max-width: 1120px) {
    display: none;
    flex-direction: column;
    gap: 16px;

    margin-top: 85px;

    position: fixed;
    left: 0;
    top: 0;

    width: 100%;

    min-height: 460px;
    height: calc(100vh - 85px); // fallback
    height: -webkit-fill-available;

    padding: 48px 24px 0;

    background: #121212;
  }

  @media (max-height: 548px) and (max-width: 1120px) {
    position: absolute;
  }
`

export const Link = styled.a`
  display: inline-block;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #87879b;

  height: 85px;
  padding: 32px 0;
  border-bottom: 2px solid transparent;

  cursor: pointer;

  transition: color 0.2s ease, font-weight 0.2s ease, border-bottom 0.2s ease;

  :hover {
    border-bottom: 2px solid #f93822;
    color: #e1e1e6;
  }

  &.active {
    color: #ffffff;
    font-weight: 575;
    border-bottom: 2px solid #f93822;
  }

  &.active:hover {
    color: #e1e1e6;
  }

  @media (max-width: 1120px) {
    height: unset;
    padding: 0 0 32px;

    transition: none;

    font-size: 18px;
    line-height: 22px;

    &.active {
      margin-bottom: 32px;
    }
  }
`

export const Button = styled.button`
  padding: 12px 24px;

  background: #f93822;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  cursor: pointer;

  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }

  a {
    font-weight: 475;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  @media (max-width: 1120px) {
    padding: 20px 0;

    width: 100%;
    border-radius: 8px;
  }
`

export const SocialLinks = styled.ul`
  display: none;
  gap: 32px;

  position: absolute;
  bottom: 40px;

  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #87879b;
  }

  @media (max-width: 1120px) {
    display: flex;
  }
`
