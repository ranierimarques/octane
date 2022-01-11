import { styled } from 'linaria/react'

export const Cards = styled.ul`
  display: flex;
  gap: 32px;

  margin: 78px 0 120px 0;
`

export const Card = styled.li`
  background: #29292e;
  border: 1px solid #322f2f;
  border-radius: 12px;

  padding: 32px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;

  max-width: 308px;

  &.emphasis {
    position: relative;
    padding: 32px 40px;
    max-width: 324px;
    border-radius: 0px 0px 12px 12px;

    ::after {
      content: 'Mais procurado';
      position: absolute;
      top: -30px;
      left: -1px;

      width: 100%;

      padding: 4px 0;

      background: #fa5a47;
      border-radius: 12px 12px 0px 0px;
      border-right: 1px solid #fa5a47;
      border-left: 1px solid #fa5a47;

      font-weight: 350;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
    }
  }
`

export const Subtitle = styled.h4`
  font-weight: 650;
  font-size: 24px;
  line-height: 38px;
  color: #ffffff;
  letter-spacing: 0.8px;
`

export const Divider = styled.div`
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #ff5343 0%, #ff8175 100%);
`

export const Description = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 29px;
  color: #e1e1e6;
`

export const TextButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #fa5a47;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`
