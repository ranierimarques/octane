import { styled } from 'linaria/react'

import { OctaneGhost as OctaneGhostSvg } from '../svgs'

export const Details = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`

export const Front = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  width: 116px;
  height: 116px;

  background: #e1e1e6;
  opacity: 0.9;

  position: absolute;
  top: -20px;
  left: -20px;
`

export const OctaneGhost = styled(OctaneGhostSvg)`
  filter: drop-shadow(0px 0px 10px rgba(250, 90, 71, 0.4));
`
