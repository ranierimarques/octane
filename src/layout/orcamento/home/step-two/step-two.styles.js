import { styled } from 'linaria/react'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  gap: 8px 32px;

  max-width: 800px;

  > :nth-child(even) {
    flex-basis: 400px;
  }
`
