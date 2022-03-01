import { styled } from 'linaria/react'

export const Modal = styled.div`
  position: fixed;
  left: 50vw;
  top: 50vh;

  width: 635px;

  z-index: 10;

  background: #121212;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.55);
  border-radius: 12px;

  padding: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translate(-50%, -50%);
`

export const Title = styled.h3`
  font-weight: 500;
  font-variation-settings: 'wght' 475;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;

  margin: 40px 0 16px;
`

export const Description = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 375;
  font-size: 16px;
  line-height: 22px;
  color: #cacad3;

  margin-bottom: 32px;
`
