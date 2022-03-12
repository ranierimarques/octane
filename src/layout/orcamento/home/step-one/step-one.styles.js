import { styled } from 'linaria/react'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 40px 32px;

  max-width: 800px;

  > :nth-child(even) {
    flex-basis: 400px;
  }
`

export const Container = styled.div`
  flex-basis: 368px;
`

export const DoubleInput = styled.div`
  display: flex;
  gap: 8px;
`
