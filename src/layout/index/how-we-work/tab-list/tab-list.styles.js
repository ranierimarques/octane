import { css } from 'linaria'
import { styled } from 'linaria/react'

export const TabList = styled.div`
  display: flex;
  gap: 20px;

  margin-bottom: 24px;
`

export const Tab = styled.button`
  padding: 4px 8px 6px;
  border-bottom: 2px solid ${props => (props.isActive ? '#fa5a47' : 'transparent')};

  cursor: pointer;

  :hover ${Text} {
    color: ${props => (props.isActive ? '#e1e1e6' : '#fff')};
  }

  :hover ${Svg} {
    fill: ${props => (props.isActive ? '#fa5a47' : '#fff')};
  }

  ${Text} {
    font-weight: ${props => (props.isActive ? '600' : '400')};
    color: ${props => (props.isActive ? '#fff' : '#b4b4c0')};
  }

  ${Svg} {
    fill: ${props => (props.isActive ? '#fa5a47' : '#b4b4c0')};
    transition-duration: ${props => (props.isActive ? '0ms' : '150ms')};
  }
`

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 20px;
  line-height: 28px;

  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Svg = css`
  transition: fill 150ms cubic-bezier(0.4, 0, 0.2, 1);
`
