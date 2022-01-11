import { styled } from 'linaria/react'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1168px;

  padding: 0 24px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 64px 0;
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
  font-weight: 625;
  font-size: 32px;
  line-height: 45px;
  color: #e1e1e6;

  margin-bottom: 16px;
`

export const Description = styled.h2`
  position: relative;

  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 29px;
  color: #b4b4c0;

  padding-bottom: 32px;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;

    transform: translate(-50%);

    width: 208px;
    height: 1px;

    background: linear-gradient(
      90deg,
      rgba(202, 202, 211, 0.557292) 0%,
      rgba(202, 202, 211, 0.3) 0.01%,
      rgba(202, 202, 211, 0.7) 27.6%,
      rgba(202, 202, 211, 0.5) 49.48%,
      rgba(202, 202, 211, 0.7) 70.31%,
      rgba(202, 202, 211, 0.3) 100%
    );
  }
`
