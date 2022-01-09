import { styled } from 'linaria/react'
import { css } from 'linaria'

export const TabList = styled.div`
  display: flex;
  gap: 20px;

  margin-bottom: 24px;
`

export const Tab = styled.button`
  padding: 4px 8px 6px;
  border-bottom: 2px solid transparent;

  cursor: pointer;

  :hover ${Text} {
    color: #fff;
  }

  :hover ${Svg} {
    fill: #fff;
  }

  &.active {
    border-bottom: 2px solid #fa5a47;

    ${Text} {
      font-weight: 600;
      color: #fff;

      :hover {
        color: #e1e1e6;
      }
    }

    ${Svg} {
      fill: #fa5a47;
    }
  }
`

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #b4b4c0;

  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Svg = css`
  fill: #b4b4c0;

  transition: fill 150ms cubic-bezier(0.4, 0, 0.2, 1);
`
