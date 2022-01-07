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
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: #1d1b1b;
  }
`
