import { styled } from 'linaria/react'

export const Markers = styled.div`
  position: absolute;
  bottom: -22px;

  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const Line = styled.div`
  width: 2px;
  height: 14px;

  background: #474343;
`

export const Text = styled.span`
  position: absolute;
  bottom: -27px;

  &.center {
    transform: translate(-50%);
  }

  &.end {
    transform: translate(-100%);
  }

  font-weight: 400;
  font-variation-settings: 'wght' 400;
  font-size: 12px;
  line-height: 17px;
  color: #cacad3;
`
