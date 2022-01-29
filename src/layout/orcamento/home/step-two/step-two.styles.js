import { styled } from 'linaria/react'

export const Container = styled.div`
  margin: 0 auto;

  width: fit-content;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`

export const Title = styled.div`
  font-weight: 800;
  font-variation-settings: 'wght' 850;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
`

export const NextButton = styled.button`
  font-weight: 800;
  font-variation-settings: 'wght' 850;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;

  padding: 16px 24px;

  background: red;
`

export const PrevButton = styled.button`
  font-weight: 800;
  font-variation-settings: 'wght' 850;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;

  padding: 16px 24px;

  background: blue;
`
