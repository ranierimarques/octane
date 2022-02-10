import { styled } from 'linaria/react'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  gap: 8px 32px;

  > :nth-child(1) {
    flex-basis: 453px;
  }

  > :nth-child(2) {
    flex-basis: 400px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 800px;
`
