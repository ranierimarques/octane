import { styled } from 'linaria/react'

export const ClipboardInformation = styled.div`
  position: relative;

  background: #09090a;
  border-radius: 0px 10px 10px 10px;

  min-width: 280px;
  height: fit-content;

  :after {
    content: 'CHECKOUT DE INFORMAÇÕES';
    position: absolute;
    top: -21px;
    left: -1px;

    background: #fa5a47;

    border: 2px solid #29292e;
    border-radius: 5px 5px 5px 0px;

    padding: 3px 13px;

    font-weight: 600;
    font-variation-settings: 'wght' 575;
    font-size: 12px;
    line-height: 17px;
    color: #e1e1e6;
  }
`

export const Auxiliary = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 12px 20px 14px;

  border-bottom: 1px dashed #29292e;

  > :nth-child(2) {
    text-align: right;
  }
`

export const AuxTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const AuxTitle = styled.span`
  font-weight: 600;
  font-variation-settings: 'wght' 625;
  font-size: 14px;
  line-height: 20px;
  color: #9e9eae;
`

export const AuxDescription = styled.span`
  font-weight: 700;
  font-variation-settings: 'wght' 650;
  font-size: 12px;
  line-height: 14px;
  color: #726a6a;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 16px 20px 30px;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Title = styled.span`
  font-weight: 700;
  font-variation-settings: 'wght' 625;
  font-size: 12px;
  line-height: 17px;
  text-transform: uppercase;
  color: #87879b;
`

export const Description = styled.span`
  font-weight: 400;
  font-variation-settings: 'wght' 325;
  font-size: 14px;
  line-height: 17px;
  color: #e1e1e6;
`
