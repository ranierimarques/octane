import { styled } from 'linaria/react'

export const Section = styled.section`
  position: relative;

  background: #1d1b1b;

  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;

    width: 100%;
    height: 1px;

    background: linear-gradient(
      -90deg,
      rgba(114, 106, 106, 0.4) 0%,
      rgba(71, 67, 67, 0.2) 100%
    );
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 1px;

    background: linear-gradient(
      90deg,
      rgba(114, 106, 106, 0.4) 0%,
      rgba(71, 67, 67, 0.2) 100%
    );
  }
`

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;

  max-width: 1168px;

  padding: 120px 24px;
  margin: 0 auto;
`

export const Illustration = styled.object`
  position: absolute;
  top: -175px;
  left: -190px;

  pointer-events: none;
  user-select: none;

  filter: drop-shadow(0 0 125px rgba(0, 0, 0, 0.8));
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

export const Title = styled.h3`
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  color: #e1e1e6;

  max-width: 450px;

  margin-bottom: 24px;
`

export const Description = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 29px;
  color: #b4b4c0;

  max-width: 540px;
`
