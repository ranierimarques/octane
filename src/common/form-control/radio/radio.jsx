import * as S from './radio.styles'

function Radio({ children }) {
  return (
    <S.Label>
      <S.Input type="radio" name="radio" />
      {children}
    </S.Label>
  )
}

export default Radio
