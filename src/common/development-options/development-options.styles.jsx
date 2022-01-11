import { styled } from 'linaria/react'

export const Button = styled.button`
  position: relative;

  position: fixed;
  bottom: 20px;
  right: 20px;

  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #fff;

  background: red;
  padding: 12px 24px;
  border-radius: 4px;

  cursor: pointer;

  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 100;

  :active {
    opacity: 0.6;
  }
`
