import { styled } from 'linaria/react'

export const Button = styled.button`
  font-weight: 600;
  font-variation-settings: 'wght' 475;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  padding: 16px 48px;
  border-radius: 8px;

  cursor: pointer;

  &.large {
    width: 100%;
  }

  &.contained {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    background: #f93822;

    will-change: opacity;

    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.5;
    }

    :disabled {
      transition: none;
      cursor: inherit;
      opacity: 0.38;
    }
  }

  &.text {
    transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  &.outlined {
    transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid #87879b;

    :hover {
      background: rgba(225, 225, 230, 0.04);
    }

    :active {
      background: rgba(225, 225, 230, 0.18);
    }
  }
`
