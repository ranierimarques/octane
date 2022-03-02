import { styled } from 'linaria/react'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  ${Container}:last-of-type {
    margin-bottom: 8px;
  }
`

export const Container = styled.div`
  flex-basis: 368px;
`
