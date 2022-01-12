import { styled } from 'linaria/react'

export const ContactForm = styled.div`
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 120px;

  display: flex;
`

export const Left = styled.div`
  position: relative;

  background: #1d1b1b;
  border-radius: 20px 0px 0px 20px;
  padding: 64px;

  border: solid #322f2f;
  border-width: 1px 0px 1px 1px;

  width: 509px; /* Remover depois */
`

export const Header = styled.header`
  max-width: 349px;

  margin-bottom: 64px;
`

export const Subtitle = styled.h3`
  font-weight: 600;
  font-variation-settings: 'wght' 550;
  font-size: 32px;
  line-height: 45px;
  color: #e1e1e6;

  margin-bottom: 24px;
`

export const Description = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 29px;
  color: #b4b4c0;
`

export const Right = styled.div`
  background: #29292e;
  border: 1px solid #322f2f;
  border-radius: 0px 20px 20px 0px;

  width: 396px; /* Remover depois */

  padding: 64px 48px;
`
