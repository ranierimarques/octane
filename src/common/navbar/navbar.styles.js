import { styled } from 'linaria/react'

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
