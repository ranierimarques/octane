import { styled } from 'linaria/react'

export const TabPanel = styled.ul`
  background: #0a0909;
  border: 1px solid #322f2f;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(225, 225, 230, 0.05);

  padding: 11px;

  display: flex;
`

export const Panel = styled.li`
  max-width: 264px;

  padding: 32px;
`

export const Localization = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14.5px 0;
  margin-bottom: 16px;
`

export const Number = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #fff;

  background: -webkit-linear-gradient(left, rgba(250, 90, 71, 0.25) 0%, #fa5a47 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Texts = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`

export const Subtitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #e1e1e6;
`

export const Description = styled.p`
  font-weight: 500;
  font-variation-settings: 'wght' 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.06px;
  color: #cacad3;
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
