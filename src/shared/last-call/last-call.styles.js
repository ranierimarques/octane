import { styled } from 'linaria/react'

import { OctaneGhost as OctaneGhostSvg } from './svgs'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 64px 0;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 48px;
`

export const OctaneGhost = styled(OctaneGhostSvg)`
  filter: drop-shadow(0px 31px 15px #2f0a0a);
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 48px;
  line-height: 67px;
  color: #ffffff;
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  color: #b4b4c0;
`
