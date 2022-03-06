import { styled } from 'linaria/react'

export const Title = styled.label`
  display: inline-block;

  font-weight: 600;
  font-variation-settings: 'wght' 475;
  font-size: 16px;
  line-height: 22px;
  color: #e1e1e6;

  margin-bottom: ${props => (props.smallMargin ? '3px' : '12px')};
`

export const Description = styled.label`
  display: inline-block;

  width: fit-content;

  font-weight: 500;
  font-variation-settings: 'wght' 425;
  font-size: 12px;
  line-height: 22px;
  color: #9e9eae;

  margin-bottom: 12px;
`
