import { styled } from 'linaria/react'

export const Section = styled.section`
  position: relative;

  background: #1d1b1b;

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
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1168px;

  padding: 0 24px;
  margin: 0 auto;
`

export const Header = styled.header`
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 48px;
`

export const Title = styled.h3`
  position: relative;

  font-weight: 600;
  font-size: 32px;
  line-height: 45px;
  text-align: center;
  color: #e1e1e6;

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
  font-weight: 325;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #cacad3;

  max-width: 541px;
`

export const Tabs = styled.div`
  width: 992px;
`
