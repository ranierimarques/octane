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
  font-weight: 400;
  font-variation-settings: 'wght' 300;
  font-size: 16px;
  line-height: 26px;
  color: #e1e1e6;

  max-width: 298px;
`

export const SvgWrapper = styled.div`
  position: relative;

  margin-top: 80px;
  margin-right: 73px;
`

export const Briefing = css`
  position: absolute;
  top: 31px;
  right: -37px;
`

export const References = css`
  position: absolute;
  top: -17px;
  right: -45px;
`

export const UiUx = css`
  position: absolute;
  top: 34px;
  right: -32px;
`
export const Programming = css`
  position: absolute;
  top: 25px;
  right: -55px;
`
export const Completion = css`
  position: absolute;
  top: 18px;
  right: -55px;
`
