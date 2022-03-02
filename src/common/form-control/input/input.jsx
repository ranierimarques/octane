import * as S from './input.styles.js'

function Input({ disabled, id, label, secondLabel, hidden, variant, onChangeData }) {
  function handleInputChange(event) {
    const value = event.target.value

    onChangeData(value, id)
  }

  if (variant === 'textarea') {
    return (
      <S.Div>
        <S.Textarea
          as="textarea"
          id={id}
          type="text"
          placeholder=" "
          onChange={handleInputChange}
        />
        <S.Label>{label}</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Div>
    )
  }

  if (variant === 'website') {
    return (
      <S.Wrapper isHidden={hidden}>
        <S.Http className={disabled ? 'disabled' : ''}>http://</S.Http>

        <S.Div>
          <S.Input
            id={id}
            type="text"
            placeholder="www.exemplo.com"
            disabled={disabled}
          />
          <S.Label>{label}</S.Label>
          <S.BottomLine />
        </S.Div>
      </S.Wrapper>
    )
  }

  if (secondLabel) {
    return (
      <S.DoubleInput>
        <S.Div>
          <S.Input id={id} type="text" placeholder=" " disabled={disabled} />
          <S.Label>{label}</S.Label>
          <S.BottomLine />
        </S.Div>
        <S.Div>
          <S.Input id={id} type="text" placeholder=" " disabled={disabled} />
          <S.Label>{secondLabel}</S.Label>
          <S.BottomLine />
        </S.Div>
      </S.DoubleInput>
    )
  }

  return (
    <S.Div isHidden={hidden}>
      <S.Input
        id={id}
        type="text"
        placeholder=" "
        disabled={disabled}
        onChange={handleInputChange}
      />
      <S.Label>{label}</S.Label>
      <S.BottomLine />
    </S.Div>
  )
}

export default Input
