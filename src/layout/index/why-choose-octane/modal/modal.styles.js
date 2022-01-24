import { styled } from 'linaria/react'

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

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 15;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.55);
`

export const Modal = styled.div``
