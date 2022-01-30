import { styled } from 'linaria/react'

import { Wire as WireSvg } from 'public/svgs'

export const Final = styled.div`
  position: relative;

  background: #1d1b1b;
  border: 1px solid #322f2f;
  border-radius: 20px;

  display: flex;
  gap: 64px;

  padding: 100px;

  max-width: 914px;

  margin: 0 auto 120px auto;

  overflow: hidden;
`

export const Hat = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;

  padding: 8px 20px;

  border: 1px solid #fa5a47;
  border-radius: 1000px;

  margin-bottom: 24px;

  height: 41px;
`

export const Text = styled.span`
  font-weight: 700;
  font-variation-settings: 'wght' 650;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.2px;
  color: #fa5a47;

  transform: translateZ(0);
`

export const Title = styled.h2`
  font-weight: 800;
  font-variation-settings: 'wght' 850;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;

  max-width: 377px;

  margin-bottom: 24px;
`

export const Description = styled.p`
  font-weight: 500;
  font-variation-settings: 'wght' 475;
  font-size: 16px;
  line-height: 29px;
  color: #9e9eae;

  max-width: 321px;

  margin-bottom: 48px;
`

export const NextButton = styled.button`
  font-weight: 800;
  font-variation-settings: 'wght' 850;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  padding: 16px 48px;

  background: red;
`

export const Illustration = styled.object`
  position: absolute;
  top: 80px;
  right: 90px;

  pointer-events: none;
  user-select: none;
`

export const Wire = styled(WireSvg)`
  position: absolute;
  left: 270px;
  top: -40px;

  pointer-events: none;
  user-select: none;
`
