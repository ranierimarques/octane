import { styled } from 'linaria/react'

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
