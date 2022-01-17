import * as S from './radio.styles'

function Radio({ children }) {
  return (
    <S.Label>
      <S.Wrapper>
        <S.Input type="radio" name="radio" />
        <S.Tooltip>{children}</S.Tooltip>
      </S.Wrapper>
      {children}
    </S.Label>
  )
}

export default Radio
