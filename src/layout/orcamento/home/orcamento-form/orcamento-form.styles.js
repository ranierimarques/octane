import { styled } from 'linaria/react'

export const OrcamentoForm = styled.div`
  position: relative;

  background: #1d1b1b;
  border: 1px solid #474343;
  border-radius: 20px;

  margin-bottom: 120px;

  padding: 80px 160px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Subtitle = styled.h3`
  font-weight: 800;
  font-variation-settings: 'wght' 850;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;

  margin-bottom: 24px;
`

export const Description = styled.p`
  font-weight: 500;
  font-variation-settings: 'wght' 400;
  font-size: 16px;
  line-height: 29px;
  color: #9e9eae;
  text-align: center;

  max-width: 478px;
  margin-bottom: 48px;
`

export const ImageTop = styled.div`
  position: absolute;
  top: -204px;
  right: -214px;

  pointer-events: none;
  user-select: none;
`

export const ImageBottom = styled.div`
  position: absolute;
  bottom: -136px;
  left: -151px;

  pointer-events: none;
  user-select: none;
`
