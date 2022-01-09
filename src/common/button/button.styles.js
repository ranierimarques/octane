import { styled } from 'linaria/react'

export const Primary = styled.button`
  background: #f93822;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  cursor: pointer;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }

  &.small {
    border-radius: 50px;

    ${Link} {
      padding: 12px 24px;
    }

    @media (max-width: 1120px) {
      width: 100%;
      border-radius: 8px;

      ${Link} {
        padding: 20px 0;
      }
    }
  }
`

export const Link = styled.a`
  display: inline-block;

  font-weight: 475;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  padding: 20px 32px;
`

export const Secondary = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  display: flex;
  align-items: center;
  gap: 20px;

  padding: 16px 20px;

  border-radius: 8px;

  cursor: pointer;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: #1d1b1b;
  }

  &.outlined {
    position: relative;
    background: #121212;

    ::after {
      content: '';
      position: absolute;
      inset: 0;

      border-radius: 8px;
      padding: 1px;

      background: linear-gradient(
        90deg,
        rgba(202, 202, 211, 0.557292) 0%,
        rgba(202, 202, 211, 0.3) 0.01%,
        rgba(202, 202, 211, 0.7) 27.6%,
        rgba(202, 202, 211, 0.5) 49.48%,
        rgba(202, 202, 211, 0.7) 70.31%,
        rgba(202, 202, 211, 0.3) 100%
      );
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }

    :hover {
      opacity: 0.7;
    }
  }
`
