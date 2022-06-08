import { styled } from 'linaria/react'
import { CloseMenu as CloseMenuSvg } from 'public/svgs'

export const Modal = styled.div`
  position: fixed;
  left: 50vw;
  top: 50vh;

  z-index: 10;

  background: #121212;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.55);
  border-radius: 12px;

  padding: 64px 64px 40px;

  display: flex;
  flex-direction: column;

  transform: translate(-50%, -50%);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 24px;
`

export const Title = styled.h3`
  font-weight: 500;
  font-variation-settings: 'wght' 475;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;
`

export const Description = styled.p`
  max-width: 402px;

  font-weight: 400;
  font-variation-settings: 'wght' 375;
  font-size: 16px;
  line-height: 22px;
  color: #cacad3;

  margin-bottom: 32px;
`

export const Informations = styled.div`
  width: 507px;
  height: 279px;

  margin-bottom: 32px;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23CACAD3FF' stroke-width='1' stroke-dasharray='4%2c 4' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 4px;

  overflow-y: auto;
`

export const Step = styled.header`
  background: #121212;
  border-radius: 4px 4px 0 0;

  margin: 1px 1px 0;
  padding: 16px 16px 0;

  display: flex;
  gap: 8px;

  position: sticky;
  top: 1px;
`

export const Marker = styled.span`
  font-weight: 600;
  font-variation-settings: 'wght' 575;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  background: #fa5a47;
  border-radius: 50%;

  width: 20px;

  text-align: center;
`

export const StepTitle = styled.h4`
  font-weight: 600;
  font-variation-settings: 'wght' 575;
  font-size: 16px;
  line-height: 19px;
  color: #fa5a47;
`

export const Questions = styled.div`
  margin: 16px 40px 15px 32px;
`

export const Wrapper = styled.div`
  + ${Wrapper} {
    margin-top: 8px;
  }
`

export const Question = styled.span`
  font-weight: 600;
  font-variation-settings: 'wght' 525;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #87879b;
`

export const Answer = styled.p`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 14px;
  line-height: 22px;
  color: #e1e1e6;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CloseMenu = styled(CloseMenuSvg)`
  position: absolute;
  top: 10px;
  right: 10px;

  box-sizing: content-box;
  border-radius: 5px;
  padding: 13px;

  cursor: pointer;

  fill: #87879b;

  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    fill: #ffffff;
    background: #29292e;
  }
`
