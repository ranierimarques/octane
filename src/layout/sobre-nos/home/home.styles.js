import { styled } from 'linaria/react'

import { Wire as WireSvg } from 'public/svgs'
import { Illustration as IllustrationSvg } from './svgs'

export const Section = styled.section`
  position: relative;
`

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  max-width: 1168px;

  padding: 0 24px;
  margin: 0 auto;
`

export const Main = styled.div`
  margin-top: 80px;
  margin-bottom: 120px;
`

export const Hat = styled.span`
  display: inline-block;

  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.8px;
  color: #f93822;

  margin-bottom: 12px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-variation-settings: 'wght' 625;
  font-size: 32px;
  line-height: 45px;
  color: #e1e1e6;

  max-width: 453px;

  margin-bottom: 16px;
`

export const Description = styled.h2`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 29px;
  color: #b4b4c0;

  max-width: 478px;

  margin-bottom: 32px;
`

export const Illustration = styled(IllustrationSvg)`
  position: absolute;
  top: 80px;
  right: 15px;

  pointer-events: none;
  user-select: none;
`

export const Wire = styled(WireSvg)`
  position: absolute;
  right: 0;
  top: 0;

  z-index: -1;

  pointer-events: none;
  user-select: none;
`
