import { styled } from 'linaria/react'

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

    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: calc(100vh - 85px);

    padding: 48px 24px 0;

    background: #121212;

    overflow-y: scroll; // fallback
    overflow-y: overlay;
  }
`
