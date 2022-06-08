import { css } from 'linaria'
import { styled } from 'linaria/react'

export const TabList = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 16px 32px 0;

  background: #29292e;
  border-radius: 4px;

  overflow: hidden;
`

export const Tab = styled.button`
  padding: 0 10px 14px;
  border-bottom: 2px solid ${props => (props.isActive ? '#fa5a47' : 'transparent')};

  cursor: pointer;

  :hover ${Text} {
    color: ${props => (props.isActive ? '#e1e1e6' : '#cacad3')};
  }

  :hover ${Svg} {
    fill: ${props => (props.isActive ? '#fa5a47' : '#cacad3')};
  }

  ${Text} {
    color: ${props => (props.isActive ? '#fff' : '#726a6a')};
  }

  ${Svg} {
    fill: ${props => (props.isActive ? '#fa5a47' : '#726a6a')};
    transition-duration: ${props => (props.isActive ? '0ms' : '150ms')};
  }
`

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 425;
  font-size: 20px;
  line-height: 32px;

  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Svg = css`
  transition: fill 150ms cubic-bezier(0.4, 0, 0.2, 1);
`
