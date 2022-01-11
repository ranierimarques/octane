import { styled } from 'linaria/react'

export const Link = styled.a`
  display: inline-block;

  font-weight: 500;
  font-variation-settings: 'wght' 400;
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
    font-weight: 600;
    font-variation-settings: 'wght' 575;
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
