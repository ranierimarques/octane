import { styled } from 'linaria/react'

import { ArrowDropDown as ArrowDropDownSvg } from '../svgs'

export const Wrapper = styled.div`
  position: relative;
`

export const Div = styled.div`
  position: relative;

  width: 100%;
`

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 16px;

  font-weight: 400;
  font-variation-settings: 'wght' 375;
  font-size: 16px;
  line-height: 19px;
  color: #87879b;

  transform-origin: left top;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  user-select: none;
  pointer-events: none;

  z-index: 2;
`

export const Input = styled.input`
  background: #1d1b1b;
  border-radius: 4px 4px 0px 0px;

  width: 100%;
  height: 48px;

  padding: 21px 16px 8px;

  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;
  caret-color: #fa5a47;

  border-bottom: 1px solid #87879b;

  ::placeholder {
    user-select: none;

    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

    opacity: 0;
  }

  :not(:disabled) {
    :hover {
      background: #211f1f;
      border-bottom: 1px solid #9e9eae;
    }

    :focus,
    &.focus {
      background: #242222;

      ~ ${Label} {
        color: #fa5a47;
        font-weight: 500;
        font-variation-settings: 'wght' 450;
        transform: translateY(-8px) scale(0.75);
      }

      ~ ${BottomLine} {
        transform: scaleX(1);
        opacity: 1;
      }

      ~ ${ArrowDropDown} {
        transform: rotate(-180deg);
        fill: #fa5a47;
      }

      ::placeholder {
        color: #87879b;

        opacity: 1;
      }
    }

    :-webkit-autofill {
      box-shadow: 0 0 0 60px #1d1b1b inset;
      background-clip: content-box;
      -webkit-text-fill-color: #e1e1e6;
    }
  }

  :disabled {
    opacity: 0.38;
    cursor: inherit;

    + ${Label} {
      opacity: 0.38;
    }
  }

  :not(:placeholder-shown):not(:focus) + ${Label} {
    font-weight: 500;
    font-variation-settings: 'wght' 450;
    transform: translateY(-8px) scale(0.75);
  }
`

export const ArrowDropDown = styled(ArrowDropDownSvg)`
  position: absolute;
  top: 15px;
  right: 16px;

  fill: #9e9eae;

  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 150ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 2px;

  background: #fa5a47;

  transform: scaleX(0);
  opacity: 0;

  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Options = styled.div`
  position: absolute;
  width: 100%;

  padding: 12px 0;
  background: #1d1b1b;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 4px 4px;

  z-index: 10;

  display: ${props => (props.isVisible ? 'block' : 'none')};
`

export const Option = styled.div`
  font-weight: 400;
  font-variation-settings: 'wght' 300;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  padding: 16px 18px;

  border-left: 2px solid #1d1b1b;

  background: #1d1b1b;

  cursor: pointer;

  :hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.04),
        rgba(255, 255, 255, 0.04)
      ),
      #1d1b1b;
    border-left: 2px solid #fa5a47;
  }

  &.active {
    background: #29292e;
    border-left: 2px solid #fa5a47;

    :hover {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.02),
          rgba(255, 255, 255, 0.02)
        ),
        #29292e;
    }
  }
`
