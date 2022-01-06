import { styled } from 'linaria/react'

export const Section = styled.section`
  display: flex;
  justify-content: space-between;

  max-width: 1168px;

  padding: 0 24px;
  margin: 0 auto;
`

export const Main = styled.div`
  margin-top: 80px;

  h1 {
    font-weight: 850;
    font-size: 40px;
    line-height: 120%;
    color: #ffffff;

    max-width: 422px;

    margin-bottom: 16px;
  }

  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: #b4b4c0;

    max-width: 321px;

    margin-bottom: 32px;
  }
`

export const Hat = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;

  padding: 8px 20px;

  border: 1px solid #fa5a47;
  border-radius: 1000px;

  margin-bottom: 16px;

  height: 41px;

  span {
    font-weight: 425;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.2px;
    color: #f93822;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const PrimaryButton = styled.button`
  font-weight: 475;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  padding: 20px 32px;

  background: #f93822;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.14902);
  border-radius: 8px;

  cursor: pointer;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }
`

export const SecondaryButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #e1e1e6;

  display: flex;
  align-items: center;
  gap: 20px;

  padding: 16px 20px;

  height: 51px;
  border-radius: 8px;

  cursor: pointer;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: #1d1b1b;
  }
`

export const Image1 = styled.div`
  position: relative;
  top: 10px;
  right: -22.5px;

  pointer-events: none;
  user-select: none;
`