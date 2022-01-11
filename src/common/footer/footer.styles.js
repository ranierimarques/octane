import { styled } from 'linaria/react'

export const Footer = styled.footer`
  position: relative;

  background: #0d0c0c;

  border-top: 1px solid #322f2f;

  :after {
    content: '';
    width: 100%;
    height: 1px;

    bottom: 112px;
    position: absolute;

    background: #1d1b1b;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1168px;

  padding: 0 24px;
  margin: 0 auto;
`

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin: 64px 0;
`

export const Octane = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Slogan = styled.span`
  font-weight: 400;
  font-variation-settings: 'wght' 375;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.4px;
  color: #e1e1e6;
`

export const Copy = styled.span`
  font-weight: 500;
  font-variation-settings: 'wght' 425;
  font-size: 14px;
  line-height: 180%;
  color: #9e9eae;
`

// Bottom part

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 32px 0;
`

export const Right = styled.div`
  display: flex;
  gap: 40px;
`

export const MadeBy = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #cacad3;
`

export const UpButton = styled.button`
  background: #1d1b1b;
  border-radius: 4px;

  width: 48px;
  height: 48px;

  cursor: pointer;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: #322f2f;
  }
`
