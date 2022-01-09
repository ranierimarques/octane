import { styled } from 'linaria/react'
import { css } from 'linaria'

export const TabList = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 16px 32px 0;

  background: #29292e;
  border-radius: 4px;
`

export const Tab = styled.button`
  font-weight: 425;
  font-size: 20px;
  line-height: 32px;
  color: #726a6a;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 10px 14px;

  border-bottom: 2px solid transparent;

  cursor: pointer;

  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #cacad3;
  }

  :hover ${Svg} {
    fill: #cacad3;
  }

  &.active {
    border-bottom: 2px solid #fa5a47;
    color: #fff;

    :hover {
      color: #e1e1e6;
    }

    ${Svg} {
      fill: #fa5a47;
    }
  }
`

export const Svg = css`
  fill: #726a6a;

  transition: fill 150ms cubic-bezier(0.4, 0, 0.2, 1);
`
