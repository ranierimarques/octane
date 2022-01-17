import { styled } from 'linaria/react'

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 500;
  font-variation-settings: 'wght' 425;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  user-select: none;
  white-space: nowrap;

  cursor: pointer;
`

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  position: relative;
  appearance: none;

  width: 16px;
  height: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :checked {
    border: 1px solid #fa5a47;
  }

  ::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;

    background: #fa5a47;
    opacity: 0.08;
    border-radius: 30px;

    transform: scale(0);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover {
    ::after {
      transform: scale(1);
    }

    + ${Tooltip} {
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 2s;
      transform: translate(-50%) scale(1);
    }
  }

  ::before {
    content: '';
    width: 10px;
    height: 10px;

    box-shadow: inset 10px 10px #fa5a47;
    border-radius: 50%;

    transform: scale(0);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :checked::before {
    transform: scale(1);
  }
`

export const Tooltip = styled.span`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;

  background: rgb(103, 120, 142);

  font-weight: 500;
  font-variation-settings: 'wght' 500;
  font-size: 11px;
  line-height: 1;
  color: white;

  transform: translate(-50%) scale(0);

  z-index: 3;
`
