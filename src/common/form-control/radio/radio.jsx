import * as S from './radio.styles'

function Radio({ option }) {
  return (
    <S.Label>
      <S.Wrapper>
        <S.Input type="radio" name="radio" />
        <S.Tooltip>{option}</S.Tooltip>
      </S.Wrapper>
      {option}
    </S.Label>
  )
}

export default Radio
