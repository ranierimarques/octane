import { styled } from 'linaria/react'

export const Nav = styled.nav`
  display: flex;
  gap: 120px;
`

export const Title = styled.span`
  display: inline-block;

  font-weight: 600;
  font-variation-settings: 'wght' 525;
  font-size: 16px;
  line-height: 120%;
  color: #e1e1e6;

  margin-bottom: 16px;
`

export const Item = styled.li`
  & + li {
    margin-top: 8px;
  }
`

export const Link = styled.a`
  display: inline-block;

  position: relative;

  font-weight: 500;
  font-variation-settings: 'wght' 465;
  font-size: 16px;
  line-height: 120%;
  color: #9e9eae;

  height: 29px;

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 0;
    height: 2px;

    background: #f93822;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  :hover:after {
    left: 0;
    right: 0;
    width: 100%;
  }
`
