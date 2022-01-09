import { styled } from 'linaria/react'
import { css } from 'linaria'

export const TabPanel = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 120px;
`

export const Content = styled.div`
  margin-top: 88px;
`

export const Subtitle = styled.h4`
  font-weight: 600;
  font-size: 32px;
  line-height: 45px;
  color: #e1e1e6;

  margin-top: 32px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: #e1e1e6;

  max-width: 295px;
`

export const SvgWrapper = styled.div`
  position: relative;

  margin-top: 80px;
  margin-right: 73px;
`

export const Svg = css`
  position: absolute;
  top: -17px;
  right: -45px;
`
