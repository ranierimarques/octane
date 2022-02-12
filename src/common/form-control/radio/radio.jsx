import * as S from './radio.styles'

function Radio({ config }) {
  const { vertical, options, id } = config

  return (
    <S.Radios isVertical={vertical}>
      {options.map(option => (
        <S.Label key={option}>
          <S.Wrapper>
            <S.Input type="radio" name={id} />
            <S.Tooltip>{option}</S.Tooltip>
          </S.Wrapper>
          {option}
        </S.Label>
      ))}
    </S.Radios>
  )
}

export default Radio
