import { styled } from 'linaria/react'

export const Section = styled.section`
  max-width: 1168px;

  padding: 0 24px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.header`
  max-width: 679px;

  margin-top: 120px;
`

export const Title = styled.h3`
  position: relative;

  font-weight: 700;
  font-size: 32px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;

  padding-bottom: 16px;
  margin-bottom: 24px;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;

    transform: translate(-50%);

    width: 176px;
    height: 1px;

    background: #fa5a47;
  }
`

export const Description = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #cacad3;
`
