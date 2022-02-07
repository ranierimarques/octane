import * as S from './radio.styles'

function Radio({ config }) {
  return (
    <S.Radios isVertical={config.vertical}>
      {config.options.map(option => (
        <S.Label key={option}>
          <S.Wrapper>
            <S.Input type="radio" name="radio" />
            <S.Tooltip>{option}</S.Tooltip>
          </S.Wrapper>
          {option}
        </S.Label>
      ))}
    </S.Radios>
  )
}

export default Radio
