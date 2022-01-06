import { styled } from 'linaria/react'

export const Container = styled.ul`
  display: flex;
  gap: 12px;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #1d1b1b;
  border-radius: 4px;

  padding: 10px;

  cursor: pointer;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: #f93822;
  }
`
