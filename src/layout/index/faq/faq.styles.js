import { styled } from 'linaria/react'

import { Shape2d as Shape2dSvg } from './svgs'

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
  max-width: 1168px;

  padding: 80px 24px 100px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 64px;
`

export const Title = styled.h3`
  font-weight: 650;
  font-size: 32px;
  line-height: 45px;
  color: #e1e1e6;
`

export const Shape2d = styled(Shape2dSvg)`
  margin-left: 10px;

  filter: drop-shadow(0px 0px 10px rgba(250, 90, 71, 0.4));
`

export const Texts = styled.p`
  font-weight: 450;
  font-size: 16px;
  line-height: 22px;
  color: #b4b4c0;

  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`

export const Strong = styled.strong`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #e1e1e6;
`

export const TextButton = styled.button`
  font-weight: 325;
  font-size: 16px;
  line-height: 22px;
  color: #fa5a47;

  position: relative;

  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    bottom: -4px;
    right: 0;

    width: 0;
    height: 2px;

    background: #fa5a47;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  :hover:after {
    left: 0;
    right: 0;
    width: 100%;
  }
`
