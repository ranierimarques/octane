import { styled } from 'linaria/react'

export const SocialLinks = styled.ul`
  display: none;
  gap: 32px;

  margin-bottom: 40px;
  margin-top: auto;

  padding-top: 64px;

  @media (max-width: 1120px) {
    display: flex;
  }
`

export const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #87879b;
`
