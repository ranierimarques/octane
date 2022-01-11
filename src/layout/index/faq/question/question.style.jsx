import { styled } from 'linaria/react'

import { ArrowDown as ArrowDownSvg } from '../svgs'

export const Item = styled.div`
  &.open ${ArrowDown} {
    transform: rotate(-180deg);
  }

  &.open ${Answer} {
    display: block;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 24px 24px 24px 32px;

  border-bottom: 1px solid #474343;

  cursor: pointer;

  &.first {
    border-top: 1px solid #474343;
  }
`

export const Number = styled.span`
  font-weight: 575;
  font-size: 20px;
  line-height: 24px;
  color: #87879b;
  text-align: start;

  width: 15px;

  margin-right: 40px;
`

export const Question = styled.strong`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #e1e1e6;
  text-align: start;

  flex: 1;
`

export const ArrowDown = styled(ArrowDownSvg)``

export const Answer = styled.p`
  display: none;

  font-weight: 400;
  font-variation-settings: 'wght' 275;
  font-size: 16px;
  line-height: 26px;
  color: #e1e1e6;

  background: linear-gradient(
    90deg,
    rgba(55, 55, 55, 0.75) 0%,
    rgba(55, 55, 55, 0.5) 100%
  );
  border-radius: 0px 0px 4px 4px;

  padding: 24px 82px 24px 87px;
`
