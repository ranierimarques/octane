import * as S from './label.styles'

function Label({ children, id }) {
  return <S.Title htmlFor={id}>{children}</S.Title>
}

export default Label
