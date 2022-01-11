import { styled } from 'linaria/react'

export const Cards = styled.ul`
  display: flex;
  gap: 64px;

  margin: 64px 0 80px 0;
`

export const Card = styled.li`
  background: #29292e;
  border-radius: 12px;
  border: 1px solid #322f2f;

  padding: 32px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  max-width: 314px;
`

export const Icon = styled.div`
  background: linear-gradient(180deg, #fa5a47 0%, #f93822 100%);
  border-radius: 4px;

  padding: 8px;

  margin-bottom: 20px;
`

export const Subtitle = styled.h4`
  font-weight: 700;
  font-variation-settings: 'wght' 650;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;

  margin-bottom: 8px;
`

export const Description = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 29px;
  color: #cacad3;

  margin-bottom: 16px;
`

export const TextButton = styled.button`
  font-weight: 500;
  font-variation-settings: 'wght' 400;
  font-size: 14px;
  line-height: 22px;
  color: #fa5a47;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`
