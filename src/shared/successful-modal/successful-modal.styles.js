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

  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -50%) translateY(20px);

  transition: transform 0.2s ease-in, opacity 0.2s ease-in, visibility 0.2s ease-in;

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) translateY(0px);

    transition: transform 0.3s ease-out 0.2s, opacity 0.3s ease-out 0.2s,
      visibility 0.3s ease-out 0.2s;
  }
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

export const Button = styled.button`
  font-weight: 500;
  font-variation-settings: 'wght' 475;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  padding: 16px 48px;
  border-radius: 8px;

  height: 51px;

  cursor: pointer;

  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  background: #f93822;

  transform: translateZ(0);

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }
`
