import { styled } from 'linaria/react'

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e6;

  user-select: none;
`

export const Input = styled.input`
  appearance: none;

  width: 16px;
  height: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
`
