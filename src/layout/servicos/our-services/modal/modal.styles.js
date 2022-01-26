import { styled } from 'linaria/react'
import { motion } from 'framer-motion'

import { CloseMenu as CloseMenuSvg } from 'public/svgs'

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

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  cursor: pointer;

  background: rgba(0, 0, 0, 0.8);
`

export const Modal = styled(motion.div)`
  z-index: 1;

  position: relative;

  width: 635px;

  background: #121212;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.55);
  border-radius: 12px;

  padding: 64px 64px 56px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 32px;
`

export const Title = styled.h5`
  font-weight: 500;
  font-variation-settings: 'wght' 500;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;
`

export const Description = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 380;
  font-size: 16px;
  line-height: 26px;
  color: #cacad3;

  margin-bottom: 48px;
`

export const Button = styled.button`
  display: block;

  font-weight: 600;
  font-variation-settings: 'wght' 475;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  margin: 0 auto;
  padding: 16px 48px;
  border-radius: 8px;

  cursor: pointer;

  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  background: #f93822;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }
`

export const CloseMenu = styled(CloseMenuSvg)`
  position: absolute;
  top: 10px;
  right: 10px;

  box-sizing: content-box;
  border-radius: 5px;
  padding: 13px;

  cursor: pointer;

  fill: #87879b;

  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    fill: #ffffff;
    background: #29292e;
  }
`
