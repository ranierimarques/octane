import { styled } from 'linaria/react'
import InputMask from 'react-input-mask'
import { ErrorIcon as ErrorIconSvg } from './svgs'

export const Div = styled.div`
  position: relative;

  width: 100%;

  display: ${props => (props.isHidden ? 'none' : 'block')};

  &.attention::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    padding: 4px;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    border: 2px solid #fa5a47;
    border-radius: 8px;

    animation: dash 0.7s ease-in-out alternate infinite;

    pointer-events: none;

    @keyframes dash {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &.error {
    margin-bottom: 20px;

    ${Label} {
      color: #ff0f0f;
    }

    ${Input} {
      padding-right: 44px;
      border-bottom: 1px solid #ff0f0f;

      :not(:disabled) {
        :hover {
          border-bottom: 1px solid #ff0f0f;
        }

        :focus {
          ~ ${Label} {
            color: #ff0f0f;
          }
        }
      }
    }

    ${BottomLine} {
      background: #ff0f0f;
    }

    ${Message} {
      visibility: visible;
    }

    ${ErrorIcon} {
      visibility: visible;
    }
  }
`

export const Input = styled(InputMask)`
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

    :focus {
      background: #242222;

      ~ ${Label} {
        color: #fa5a47;
        font-weight: 500;
        font-variation-settings: 'wght' 500;
        transform: translateY(-8px) scale(0.75);
      }

      ~ ${BottomLine} {
        transform: scaleX(1);
        opacity: 1;
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

      + ${Label} {
        font-weight: 500;
        font-variation-settings: 'wght' 500;
        transform: translateY(-8px) scale(0.75);
      }
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
    font-variation-settings: 'wght' 500;
    transform: translateY(-8px) scale(0.75);
  }
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

  will-change: transform;
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

  will-change: transform;
`

export const ErrorIcon = styled(ErrorIconSvg)`
  position: absolute;
  top: 15px;
  right: 12px;

  pointer-events: none;

  visibility: hidden;

  z-index: 2;
`

export const Helpers = styled.div`
  position: absolute;

  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 8px;

  padding: 6px 16px 0;
`

export const Message = styled.span`
  display: block;

  font-weight: 500;
  font-variation-settings: 'wght' 575;
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.04px;
  color: #ff0f0f;

  visibility: hidden;
`

export const Counter = styled.span`
  display: ${props => (props.isVisible ? 'block' : 'none')};

  font-weight: 400;
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #9e9eae;

  white-space: nowrap;
`

// Textarea

export const Textarea = styled(Input)`
  resize: none;
  overflow: overlay;
  height: 74px;

  line-height: 22px;

  transition: height 180ms cubic-bezier(0.4, 0, 0.2, 1);

  ::-webkit-scrollbar {
    width: 4px;
    display: none;

    will-change: contents;
  }

  ::-webkit-scrollbar-track {
    margin-top: 21px;
  }

  ::-webkit-scrollbar-thumb {
    background: #4d4d57;
  }

  :not(:placeholder-shown):not(:focus) {
    height: 96px;
  }

  :not(:disabled) {
    :hover {
      ~ ${TopOverflow} {
        background: #211f1f;
      }

      ::-webkit-scrollbar {
        display: block;
      }
    }

    :focus {
      height: 96px;

      ~ ${TopOverflow} {
        background: #242222;
      }

      ::-webkit-scrollbar {
        display: block;
      }

      ::-webkit-scrollbar-thumb {
        background: #fa594799;
      }
    }
  }
`

export const TopOverflow = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 21px;

  background: #1d1b1b;
  border-radius: 4px 4px 0px 0px;

  z-index: 1;

  pointer-events: none;
`

// Website

export const Wrapper = styled.div`
  display: ${props => (props.isHidden ? 'none' : 'flex')};

  border-radius: 4px 0px 0px 0px;
`

export const Http = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #87879b;

  border: solid #87879b;
  border-width: 0 1px 1px 0;

  padding: 15px 11px 0;

  background: #322f2f;

  &.disabled {
    opacity: 0.38;
    cursor: inherit;

    user-select: none;
  }
`
