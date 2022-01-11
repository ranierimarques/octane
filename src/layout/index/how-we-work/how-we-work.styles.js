import { styled } from 'linaria/react'

import { Illustration as IllustrationSvg } from './svgs'

export const Section = styled.section`
  position: relative;

  max-width: 1168px;

  padding: 0 24px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  margin: 80px 0 100px 0;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 32px;

  margin-bottom: 24px;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 65px;
  height: 65px;

  background: #09090a;
  border: 1px solid #29292e;
  border-radius: 4px;
`

export const Title = styled.h3`
  font-weight: 700;
  font-variation-settings: 'wght' 600;
  font-size: 20px;
  line-height: 28px;
  color: #e1e1e6;
`

export const Illustration = styled(IllustrationSvg)`
  position: absolute;
  top: 100px;
  right: -215px;

  pointer-events: none;
  z-index: -1;
`
