import { styled } from 'linaria/react'

export const Container = styled.div`
  position: relative;
`

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 16px;

  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 16px;
  line-height: 19px;
  color: #87879b;

  transform-origin: left top;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, color;

  user-select: none;
  pointer-events: none;
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

  :hover {
    background: #211f1f;
    border-bottom: 1px solid #9e9eae;
  }

  :focus {
    background: #242222;

    + ${Label} {
      color: #fa5a47;
      font-weight: 500;
      font-variation-settings: 'wght' 450;
      transform: translateY(-8px) scale(0.75);
    }

    + ${Label} + ${BottomLine} {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  ::placeholder {
    user-select: none;
  }

  :not(:placeholder-shown):not(:focus) + ${Label} {
    font-weight: 500;
    font-variation-settings: 'wght' 450;
    transform: translateY(-8px) scale(0.75);
  }

  :-webkit-autofill {
    box-shadow: 0 0 0 60px #1d1b1b inset;
    background-clip: content-box;
    -webkit-text-fill-color: #e1e1e6;
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
  position: sticky;
  top: 20px;
  resize: none;
  overflow: auto;
  height: 74px;

  line-height: 22px;

  transition: height 150ms cubic-bezier(0.4, 0, 0.2, 1);

  ::-webkit-scrollbar {
    width: 0px;
  }

  :focus {
    height: 95px;
  }

  :not(:placeholder-shown):not(:focus) {
    height: 95px;
  }
`
