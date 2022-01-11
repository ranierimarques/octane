import { styled } from 'linaria/react'

export const Container = styled.ul`
  display: flex;
  gap: 36px;
`

export const Link = styled.a`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: translateY(-8px);
  }
`
