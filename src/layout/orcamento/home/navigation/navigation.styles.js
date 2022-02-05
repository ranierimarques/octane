import { styled } from 'linaria/react'

export const Container = styled.div`
  display: flex;

  margin: 64px 80px 32px;

  width: 800px;
`

export const Tab = styled.div`
  border: 1px solid #726a6a;

  cursor: pointer;

  flex: 1;

  &.first {
    border-radius: 3px 0px 0px 3px;
    border-right: none;
  }

  &.third {
    border-radius: 0px 3px 3px 0px;
    border-left: none;
  }

  &.active {
    position: relative;
    overflow: hidden;

    background: linear-gradient(
      180deg,
      rgba(250, 90, 71, 0.05) 0%,
      rgba(250, 90, 71, 0.1) 100%
    );

    ${Indicator} {
      color: #ffffff;
      border: 1px solid #fa5a47;
    }

    ${Title} {
      color: #fa5a47;
    }

    ${Subtitle} {
      color: #b4b4c0;
    }

    ::after {
      content: '';
      position: absolute;
      background: #fa5a47;

      width: 100%;
      height: 4px;

      bottom: 0px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  padding: 14px 0 14px 16px;
`

export const Indicator = styled.span`
  font-weight: 700;
  font-variation-settings: 'wght' 600;
  font-size: 12px;
  line-height: 17px;
  color: #cacad3;

  box-sizing: content-box;

  border: 1px solid #9e9eae;
  border-radius: 50%;

  user-select: none;

  &.finished {
    display: grid;
    place-items: center;

    width: 30px;
    height: 30px;

    background: #fa5a47;
    border: none;
  }

  :not(.finished) {
    &.first {
      width: 15px;
      padding: 5px 6px 6px 7px;
    }

    &.second {
      width: 16px;
      padding: 5px 6px 6px;
    }

    &.third {
      width: 17px;
      padding: 5px 5px 6px 6px;
    }
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 700;
  font-variation-settings: 'wght' 625;
  font-size: 12px;
  line-height: 17px;
  color: #b4b4c0;
`

export const Subtitle = styled.span`
  font-weight: 500;
  font-variation-settings: 'wght' 425;
  font-size: 12px;
  line-height: 17px;
  color: #9e9eae;
`
