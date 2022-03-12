import { styled } from 'linaria/react'

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 40px;

  > :nth-child(1) {
    flex-basis: 452px;
  }

  > :nth-child(2) {
    flex-basis: 400px;
  }
`

export const Container = styled.div`
  flex-basis: 368px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 800px;
`
