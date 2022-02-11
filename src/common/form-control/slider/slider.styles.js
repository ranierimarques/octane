import { styled } from 'linaria/react'

export const Slider = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const Tooltip = styled.span`
  position: relative;
  transform: translate(-50%);

  font-weight: 700;
  font-variation-settings: 'wght' 525;
  font-size: 12px;
  line-height: 14px;
  color: #e1e1e6;

  width: fit-content;

  padding: 7px 9px;

  border: 1px solid #848489;
  border-radius: 2px;

  background: #5c5656;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.14902);

  :after {
    content: '';
    position: absolute;

    left: 50%;
    bottom: -5px;

    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);

    height: 8px;
    width: 8px;

    background: #5c5656;
    border-radius: 0 0 0 3px;
    transform: translate(-50%) rotate(-45deg);

    border: solid #848489;
    border-width: 1px 1px 1px 1px;
  }
`

export const Input = styled.input`
  -webkit-appearance: none;
  background: transparent;

  cursor: pointer;
  width: 100%;

  ::-webkit-slider-runnable-track {
    background: #87879b;
    border-radius: 8px;
    height: 6px;
  }

  ::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;

    width: 12px;
    height: 12px;
    border-radius: 50%;

    background: #e1e1e6;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

    margin-top: -3px;

    z-index: 1;
  }
`

export const Progress = styled.div`
  position: absolute;
  bottom: 0;

  background: linear-gradient(270deg, #fa5a47 0%, #f93822 100%);
  border-radius: 8px;

  height: 6px;

  pointer-events: none;
`
