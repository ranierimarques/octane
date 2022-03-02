import * as S from './radio.styles'

function Radio({ vertical, options, name, dispatch }) {
  function handleOptionChange(option) {
    dispatch({ type: 'select_option', payload: option })
  }

  return (
    <S.Radios isVertical={vertical}>
      {options.map(option => (
        <S.Label key={option}>
          <S.Wrapper>
            <S.Input
              type="radio"
              name={name}
              onChange={() => handleOptionChange(option)}
            />
            <S.Tooltip>{option}</S.Tooltip>
          </S.Wrapper>
          {option}
        </S.Label>
      ))}
    </S.Radios>
  )
}

export default Radio
