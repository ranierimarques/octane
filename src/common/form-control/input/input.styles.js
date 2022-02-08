import { styled } from 'linaria/react'

export const DoubleInput = styled.div`
  display: flex;
  gap: 8px;
`

export const Div = styled.div`
  position: relative;

  width: 100%;

  display: ${props => (props.isHidden ? 'none' : 'block')};
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
        font-variation-settings: 'wght' 450;
        transform: translateY(-8px) scale(0.75);
      }

      ~ ${BottomLine} {
        transform: scaleX(1);
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
